import { expect, test } from "@playwright/test";

const sections = [
  "#para-alguem-especial",
  "#nossa-historia",
  "#fotos",
  "#sobre-a-cerimonia",
  "#o-nosso-convite",
  "#como-sera-o-dia",
  "#locais",
  "#mensagem-final",
];

test("renders the complete invitation without horizontal overflow", async ({ page }, testInfo) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1, name: "Douglas & Regiane" })).toBeVisible();

  for (const selector of sections) {
    await page.locator(selector).scrollIntoViewIfNeeded();
    await page.waitForTimeout(180);
  }

  for (const selector of [".photo-card", ".event-card", ".timeline-item", ".location-card"]) {
    const items = page.locator(selector);
    for (let index = 0; index < (await items.count()); index += 1) {
      await items.nth(index).scrollIntoViewIfNeeded();
      await page.waitForTimeout(100);
    }
  }

  await expect(page.getByRole("heading", { level: 2, name: "Com carinho" })).toBeVisible();
  await expect(page.locator(".ambient-particle")).toHaveCount(9);
  await expect(page.locator(".invitation-ornament")).toHaveCount(8);

  const locationLinks = page.getByRole("link", { name: /Ver localização de .* no Google Maps/ });
  await expect(locationLinks).toHaveCount(3);

  for (let index = 0; index < 3; index += 1) {
    await expect(locationLinks.nth(index)).toHaveAttribute("href", /^https:\/\/www\.google\.com\/maps/);
    await expect(locationLinks.nth(index)).toHaveAttribute("target", "_blank");
    await expect(locationLinks.nth(index)).toHaveAttribute("rel", "noopener noreferrer");
  }

  const imagesLoaded = await page.locator("img").evaluateAll((images) =>
    images.every((image) => image.complete && image.naturalWidth > 0),
  );
  expect(imagesLoaded).toBe(true);

  const hasHorizontalOverflow = await page.evaluate(
    () => document.documentElement.scrollWidth > window.innerWidth + 1,
  );
  expect(hasHorizontalOverflow).toBe(false);

  const heroOrder = await page.evaluate(() => {
    const monogram = document.querySelector(".hero-monogram")?.getBoundingClientRect();
    const date = document.querySelector(".date-pill")?.getBoundingClientRect();

    return monogram && date
      ? {
          monogramBottom: monogram.bottom,
          dateTop: date.top,
          centerDifference: Math.abs(
            monogram.left + monogram.width / 2 - (date.left + date.width / 2),
          ),
        }
      : null;
  });
  expect(heroOrder).not.toBeNull();
  expect(heroOrder.dateTop).toBeGreaterThanOrEqual(heroOrder.monogramBottom);
  expect(heroOrder.centerDifference).toBeLessThanOrEqual(1);

  if (testInfo.project.name === "desktop") {
    const alignment = await page.evaluate(() => {
      const boxes = (selector) =>
        [...document.querySelectorAll(selector)].map((element) => {
          const rect = element.getBoundingClientRect();
          return { top: rect.top, right: rect.right, bottom: rect.bottom, left: rect.left };
        });
      const spread = (values) => Math.max(...values) - Math.min(...values);
      const photos = boxes(".photo-card");

      return {
        storyTopSpread: spread(boxes(".story-step").map((box) => box.top)),
        eventTopSpread: spread(boxes(".event-card").map((box) => box.top)),
        eventBottomSpread: spread(boxes(".event-card").map((box) => box.bottom)),
        locationTopSpread: spread(boxes(".location-card").map((box) => box.top)),
        locationBottomSpread: spread(boxes(".location-card").map((box) => box.bottom)),
        photosOverlap: photos.some((photo, index) =>
          photos.slice(index + 1).some(
            (other) =>
              Math.min(photo.right, other.right) > Math.max(photo.left, other.left) &&
              Math.min(photo.bottom, other.bottom) > Math.max(photo.top, other.top),
          ),
        ),
      };
    });

    expect(alignment.storyTopSpread).toBeLessThanOrEqual(2);
    expect(alignment.eventTopSpread).toBeLessThanOrEqual(2);
    expect(alignment.eventBottomSpread).toBeLessThanOrEqual(2);
    expect(alignment.locationTopSpread).toBeLessThanOrEqual(2);
    expect(alignment.locationBottomSpread).toBeLessThanOrEqual(2);
    expect(alignment.photosOverlap).toBe(false);
  }

  await page.screenshot({
    path: testInfo.outputPath("invitation.png"),
    fullPage: true,
    animations: "disabled",
  });
});

test("activates premium motion only near the viewport", async ({ page }) => {
  await page.goto("/");

  const hero = page.locator(".hero-section");
  await expect(hero).toHaveClass(/is-motion-active/);

  const heroAnimation = await page.locator(".hero-photo").evaluate(
    (element) => getComputedStyle(element).animationName,
  );
  expect(heroAnimation).toContain("heroCinema");

  const messageHeading = page.locator(".message-scene-heading");
  await page.locator("#para-alguem-especial").scrollIntoViewIfNeeded();
  await expect(messageHeading).toHaveClass(/is-visible/);

  const firstPhoto = page.locator(".photo-card").first();
  await firstPhoto.scrollIntoViewIfNeeded();
  await expect(firstPhoto).toHaveClass(/is-visible/);

  const photoAnimation = await firstPhoto.locator("img").evaluate(
    (element) => getComputedStyle(element).animationName,
  );
  expect(photoAnimation).toContain("photoBreath");

  const finalSection = page.locator("#mensagem-final");
  await finalSection.scrollIntoViewIfNeeded();
  await expect(finalSection).toHaveClass(/is-motion-active/);
});
