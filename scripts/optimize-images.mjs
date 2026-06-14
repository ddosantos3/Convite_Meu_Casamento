import { mkdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const sourceDirectory = path.resolve("assets/source-images");
const outputDirectory = path.resolve("public/images");
const images = ["1", "2", "3"];

await mkdir(outputDirectory, { recursive: true });

await Promise.all(
  images.map(async (name) => {
    const input = path.join(sourceDirectory, `${name}.png`);
    const output = path.join(outputDirectory, `${name}.webp`);

    await sharp(input)
      .rotate()
      .resize({ width: 1200, withoutEnlargement: true })
      .webp({ quality: 82, effort: 6 })
      .toFile(output);

    console.log(`Optimized ${name}.png -> ${name}.webp`);
  }),
);
