import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const assetsDir = path.resolve(__dirname, "../src/assets");
const images = ["hero-1", "hero-2", "hero-3", "hero-4", "hero-5"];

for (const name of images) {
  const input = path.join(assetsDir, `${name}.jpg`);
  const output = path.join(assetsDir, `${name}.webp`);
  await sharp(input).resize({ width: 1920, withoutEnlargement: true }).webp({ quality: 82 }).toFile(output);
  console.log(`Converted ${name}.jpg → ${name}.webp`);
}
