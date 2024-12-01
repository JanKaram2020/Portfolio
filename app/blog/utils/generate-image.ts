import {
  createCanvas,
  loadImage,
  registerFont,
  type CanvasRenderingContext2D,
  type Image,
} from "canvas";
import fs from "fs";
import path from "path";
import type { BlogPost } from "../types";

let imageWidth = 1200;
let imageHeight = 630;
let secondaryFontSize = 22;
let x = imageWidth / 2;
let containerWidth = 900;
let generated: string[] = [];
let cachedImage: undefined | Image;

export default async function makeImage({
  slug,
  frontMatter,
}: Pick<BlogPost, "frontMatter" | "slug">) {
  console.log({
    OgFont: path.join(process.cwd(), "public", "og-font.otf"),
    OgSecondaryFont: path.join(
      process.cwd(),
      "public",
      "og-secondary-font.otf",
    ),
  });
  try {
    registerFont(path.join(process.cwd(), "public", "og-font.otf"), {
      family: "OgFont",
    });

    registerFont(path.join(process.cwd(), "public", "og-secondary-font.ttf"), {
      family: "OgSecondaryFont",
    });
    const template = path.join(process.cwd(), "public", "og-template.png");
    const image = cachedImage ? cachedImage : await loadImage(template);
    if (!generated.includes(slug)) {
      const canvas = createCanvas(imageWidth, imageHeight);
      const ctx = canvas.getContext("2d");
      ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#191919";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      writePrimaryText(frontMatter.title, ctx);
      writeSecondaryText(frontMatter.summary, ctx);
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
      fs.writeFileSync(outputFileName, buffer as unknown as string);
      generated.push(slug);
    }
  } catch (err) {
    console.error("Error processing image:", err);
  }
}

function writePrimaryText(initialText: string, ctx: CanvasRenderingContext2D) {
  let fontSize = 50,
    font = "OgFont",
    y = imageHeight / 2 - 40,
    textWidth = 0;

  const text = initialText.toUpperCase();
  const measureText = () => {
    ctx.font = `${fontSize}px ${font}`;
    textWidth = ctx.measureText(text).width;
  };
  measureText();
  while (
    !inRange(Math.floor(textWidth), containerWidth - 2, containerWidth + 2)
  ) {
    if (textWidth > containerWidth) {
      if (textWidth - 100 > containerWidth) {
        fontSize -= 1;
      } else {
        fontSize -= 0.1;
      }
      if (fontSize <= 18) break; // Stop if font size gets too small
    }
    if (textWidth < containerWidth) {
      if (textWidth + 100 > containerWidth) {
        fontSize += 1;
      } else {
        fontSize += 0.1;
      }
    }
    measureText();
    secondaryFontSize = limitSecondaryFontSize(fontSize - 10);
  }
  ctx.fillText(text, x, y);
}

function writeSecondaryText(
  initialText: string,
  ctx: CanvasRenderingContext2D,
) {
  ctx.font = `${secondaryFontSize}px OgSecondaryFont`;
  let y = imageHeight / 2 + 40;
  const lines = splitTextToLines(initialText, ctx);
  const lineHeight = secondaryFontSize * 1.2;
  lines.forEach((line, i) => {
    ctx.fillText(line, x, y + i * lineHeight);
  });
}

function limitSecondaryFontSize(size: number) {
  if (inRange(size, 18, 22)) {
    return size;
  }
  if (size < 18) {
    return 18;
  }
  if (size > 22) {
    return 22;
  }
  return size;
}

function splitTextToLines(text: string, ctx: CanvasRenderingContext2D) {
  const words = text.split(" ");
  let line = "";
  let lines: string[] = [];

  for (let i = 0; i < words.length; i++) {
    const testLine = line + words[i] + " ";
    const testWidth = ctx.measureText(testLine).width;
    if (testWidth > containerWidth - 40 && line !== "") {
      lines.push(line.trim());
      line = words[i] + " ";
    } else {
      line = testLine;
    }
  }

  if (line) lines.push(line.trim());

  if (lines.length > 1 && lines[lines.length - 1].split(" ").length < 3) {
    const lastLine = lines.pop(); // Remove the last line
    lines[lines.length - 1] += " " + lastLine;
  }
  return lines;
}

function inRange(x: number, min: number, max: number) {
  return (x - min) * (x - max) <= 0;
}
