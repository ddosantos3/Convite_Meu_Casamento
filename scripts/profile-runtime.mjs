import { chromium } from "@playwright/test";

const url =
  process.argv[2] ??
  process.env.PROFILE_URL ??
  "http://172.17.240.1:4173";
const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({
  viewport: { width: 390, height: 844 },
  deviceScaleFactor: 2,
  isMobile: true,
  hasTouch: true,
});
const page = await context.newPage();

await page.addInitScript(() => {
  window.__longTasks = [];
  new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      window.__longTasks.push({
        duration: entry.duration,
        startTime: entry.startTime,
      });
    }
  }).observe({ type: "longtask", buffered: true });
});

const client = await context.newCDPSession(page);
await client.send("Performance.enable");
await page.goto(url, { waitUntil: "networkidle" });
await page.waitForTimeout(500);

const runtime = await page.evaluate(async () => {
  const frameTimes = [];
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  let previous = performance.now();

  await new Promise((resolve) => {
    const step = (now) => {
      frameTimes.push(now - previous);
      previous = now;
      window.scrollBy(0, 18);

      if (window.scrollY >= maxScroll) {
        resolve();
        return;
      }

      requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  });

  const sorted = [...frameTimes].sort((a, b) => a - b);
  const percentile = (value) =>
    sorted[Math.min(sorted.length - 1, Math.floor(sorted.length * value))] ?? 0;
  const resources = performance.getEntriesByType("resource");
  const navigation = performance.getEntriesByType("navigation")[0];

  return {
    documentHeight: document.documentElement.scrollHeight,
    frames: frameTimes.length,
    averageFrameMs:
      frameTimes.reduce((total, value) => total + value, 0) /
      Math.max(frameTimes.length, 1),
    p95FrameMs: percentile(0.95),
    slowFrames: frameTimes.filter((value) => value > 34).length,
    longTasks: window.__longTasks,
    resources: resources.length,
    resourceFiles: resources.map((resource) => ({
      name: new URL(resource.name).pathname,
      transferredBytes: resource.transferSize || 0,
    })),
    transferredBytes: resources.reduce(
      (total, resource) => total + (resource.transferSize || 0),
      0,
    ),
    domContentLoadedMs: navigation?.domContentLoadedEventEnd ?? 0,
    loadMs: navigation?.loadEventEnd ?? 0,
  };
});

const metrics = await client.send("Performance.getMetrics");
const metricMap = Object.fromEntries(
  metrics.metrics.map(({ name, value }) => [name, value]),
);

console.log(
  JSON.stringify(
    {
      url,
      ...runtime,
      scriptDurationMs: (metricMap.ScriptDuration ?? 0) * 1000,
      taskDurationMs: (metricMap.TaskDuration ?? 0) * 1000,
      layoutDurationMs: (metricMap.LayoutDuration ?? 0) * 1000,
      recalcStyleDurationMs: (metricMap.RecalcStyleDuration ?? 0) * 1000,
      jsHeapUsedBytes: metricMap.JSHeapUsedSize ?? 0,
    },
    null,
    2,
  ),
);

await browser.close();
