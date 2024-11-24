import { createCanvas, loadImage } from "canvas";
import fs from "fs";
import path from "path";
import type { BlogPosts } from "./get-blog-posts";

// Function to add each name to an image and save it with the name as the filename
export default async function makeImage(posts: BlogPosts) {
  try {
    const template = path.join(process.cwd(), "public", "test-table.PNG");
    const image = await loadImage(template);
    const { width, height } = image;
    posts.forEach(({ slug, frontMatter }) => {
      const canvas = createCanvas(width, height);
      const ctx = canvas.getContext("2d");

      // Draw the image onto the canvas
      ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

      // Initial font size and styling
      let fontSize = 150;
      let textWidth, textHeight;

      // Function to measure text size
      const measureText = () => {
        ctx.font = `${fontSize}px CustomArabicFont`;
        const metrics = ctx.measureText(frontMatter.title);
        textWidth = metrics.width;
        textHeight =
          metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent;
      };

      // Measure and adjust font size until it fits
      measureText();
      while ((textWidth ?? 0) > width || (textHeight ?? 0) > height) {
        fontSize -= 1;
        if (fontSize <= 0) break; // Stop if font size gets too small
        measureText();
      }

      // Center the text
      ctx.font = `${fontSize}px CustomArabicFont`;
      ctx.fillStyle = "#ff9b13";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      const x = canvas.width / 2;
      const y = canvas.height / 2 - 40;

      // Draw the Arabic text
      ctx.fillText(frontMatter.title, x, y);

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
