import {
  createCanvas,
  loadImage,
  registerFont,
  type CanvasRenderingContext2D,
} from "canvas";
import fs from "fs";
import path from "path";
import type { BlogPosts } from "./get-blog-posts";

registerFont(path.join(process.cwd(), "public", "og-font.otf"), {
  family: "OgFont",
});

registerFont(path.join(process.cwd(), "public", "og-secondary-font.ttf"), {
  family: "OgSecondaryFont",
});

const containerWidth = 900;
const imageWidth = 1200;
const imageHeight = 630;

export default async function makeImage(posts: BlogPosts) {
  try {
    const template = path.join(process.cwd(), "public", "og-template.png");
    const image = await loadImage(template);
    posts.forEach(({ slug, frontMatter }) => {
      const canvas = createCanvas(imageWidth, imageHeight);
      const ctx = canvas.getContext("2d");
      ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
      writePrimaryText(frontMatter.title, ctx);
      writeSecondaryText(frontMatter.summary, ctx);

      // Save the result to a file
      const outputFileName = path.join(
        process.cwd(),
        "public",
        "og-images",
        `${slug}.png`,
      );
      const buffer = canvas.toBuffer("image/png");
      const dirPath = path.join(process.cwd(), "public", "og-images");
      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath);
      }
      fs.writeFileSync(outputFileName, buffer);
      console.log(`${slug} was created successfully at ${outputFileName}`);
    });
  } catch (err) {
    console.error("Error processing image:", err);
  }
}

const writePrimaryText = (text: string, ctx: CanvasRenderingContext2D) => {
  let primaryFontSize = 32.1;
  let primaryTextWidth = 0;
  let primaryTextHeight = 0;
  const primaryText = text.toUpperCase();
  const measurePrimaryText = () => {
    ctx.font = `${primaryFontSize}px OgFont`;
    const metrics = ctx.measureText(primaryText);
    primaryTextWidth = metrics.width;
    primaryTextHeight =
      metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent;
  };
  measurePrimaryText();
  while (primaryTextWidth > containerWidth || primaryTextHeight > imageHeight) {
    primaryFontSize -= 1;
    if (primaryFontSize <= 0) break; // Stop if font size gets too small
    measurePrimaryText();
  }

  ctx.fillStyle = "#191919";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  const x = imageWidth / 2;
  const y = imageHeight / 2 - 40;
  ctx.fillText(primaryText, x, y);
};

const writeSecondaryText = (text: string, ctx: CanvasRenderingContext2D) => {
  let secondaryFontSize = 19.2;
  let secondaryTextWidth = 0;
  let secondaryTextHeight = 0;
  const measureSecondaryText = () => {
    ctx.font = `${secondaryFontSize}px OgSecondaryFont`;
    const metrics = ctx.measureText(text);
    secondaryTextWidth = metrics.width;
    secondaryTextHeight =
      metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent;
  };
  measureSecondaryText();
  while (
    secondaryTextWidth > containerWidth ||
    secondaryTextHeight > imageHeight
  ) {
    secondaryFontSize -= 1;
    if (secondaryFontSize <= 0) break; // Stop if font size gets too small
    measureSecondaryText();
  }

  ctx.fillStyle = "#191919";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  const x = imageWidth / 2;
  const y = imageHeight / 2 + 40;
  ctx.fillText(text, x, y);
};
