import { mkdir, rm } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const sourceDirectory = path.resolve("assets/source-images");
const outputDirectory = path.resolve("public/images");
const images = ["1", "2", "3"];

await mkdir(outputDirectory, { recursive: true });
await Promise.all(
  images.map((name) =>
    rm(path.join(outputDirectory, `${name}-768.webp`), { force: true }),
  ),
);

await Promise.all(
  images.map(async (name) => {
    const input = path.join(sourceDirectory, `${name}.png`);
    const baseImage = sharp(input).rotate();

    await Promise.all([
      baseImage
        .clone()
        .resize({ width: 900, withoutEnlargement: true })
        .webp({ quality: 78, effort: 6 })
        .toFile(path.join(outputDirectory, `${name}-900.webp`)),
      baseImage
        .clone()
        .resize({ width: 1200, withoutEnlargement: true })
        .webp({ quality: 82, effort: 6 })
        .toFile(path.join(outputDirectory, `${name}.webp`)),
    ]);

    console.log(`Optimized ${name}.png -> 900px and 1200px WebP`);
  }),
);

const noiseSize = 96;
const noise = Buffer.alloc(noiseSize * noiseSize);
let seed = 20260912;

for (let index = 0; index < noise.length; index += 1) {
  seed = (seed * 1664525 + 1013904223) >>> 0;
  noise[index] = 82 + (seed % 96);
}

await sharp(noise, {
  raw: { width: noiseSize, height: noiseSize, channels: 1 },
})
  .webp({ quality: 34, effort: 6 })
  .toFile(path.join(outputDirectory, "noise-v1.webp"));

console.log("Generated lightweight noise texture");
