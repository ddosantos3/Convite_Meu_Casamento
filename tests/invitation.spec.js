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

  await page.screenshot({
    path: testInfo.outputPath("invitation.png"),
    fullPage: true,
    animations: "disabled",
  });
});
