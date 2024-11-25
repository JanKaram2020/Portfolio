import {
  createCanvas,
  loadImage,
  registerFont,
  type CanvasRenderingContext2D,
} from "canvas";
import fs from "fs";
import path from "path";
import type { BlogPosts } from "./get-blog-posts";

const containerWidth = 800;
const imageWidth = 1200;
const imageHeight = 630;

let generated: string[] = [];

export default async function makeImage(posts: BlogPosts) {
  try {
    registerFont(path.join(process.cwd(), "public", "og-font.otf"), {
      family: "OgFont",
    });

    registerFont(path.join(process.cwd(), "public", "og-secondary-font.ttf"), {
      family: "OgSecondaryFont",
    });
    const template = path.join(process.cwd(), "public", "og-template.png");
    const image = await loadImage(template);
    posts.forEach(({ slug, frontMatter }) => {
      if (!generated.includes(slug)) {
        const canvas = createCanvas(imageWidth, imageHeight);
        const ctx = canvas.getContext("2d");
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
        writeText(frontMatter.title, ctx, "primary");
        writeText(frontMatter.summary, ctx, "secondary");

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
        generated.push(slug);
      }
    });
  } catch (err) {
    console.error("Error processing image:", err);
  }
}
const variants = {
  primary: {
    fontSize: 50,
    font: "OgFont",
    formatText: (v: string) => v.toUpperCase(),
    y: imageHeight / 2 - 40,
  },
  secondary: {
    fontSize: 19.2,
    font: "OgSecondaryFont",
    formatText: (v: string) => v,
    y: imageHeight / 2 + 40,
  },
} as const;

function inRange(x: number, min: number, max: number) {
  return (x - min) * (x - max) <= 0;
}

const writeText = (
  initialText: string,
  ctx: CanvasRenderingContext2D,
  variant: keyof typeof variants,
) => {
  let { fontSize, font, formatText, y } = variants[variant];
  let textWidth = 0;
  const text = formatText(initialText);
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
  }
  ctx.fillStyle = "#191919";
  ctx.textAlign = "left";
  ctx.textBaseline = "middle";
  const x = 200;

  if (variant == "primary") {
    ctx.fillText(text, x, y);
  }
  if (variant == "secondary") {
    const words = text.split(" ");
    let line = "";
    const lineHeight = fontSize * 1.2; // Adjust line height as needed

    for (let i = 0; i < words.length; i++) {
      const testLine = line + words[i] + " ";
      const testWidth = ctx.measureText(testLine).width;

      if (testWidth > containerWidth + 18 && line !== "") {
        ctx.fillText(line, x, y);
        line = words[i] + " ";
        y += lineHeight; // Move to the next line
      } else {
        line = testLine;
      }
    }

    // Draw the last line
    ctx.fillText(line, x, y);
  }
};
