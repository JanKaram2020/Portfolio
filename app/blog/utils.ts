import fs from "fs";
import path from "path";
import { mdxCompiler } from "./mdxCompiler";

async function getMDXData() {
  const dir = path.join(process.cwd(), "app", "blog", "posts");

  let mdxFiles = fs
    .readdirSync(dir)
    .filter((file) => path.extname(file) === ".mdx");

  const promises = mdxFiles.map(async (file) => {
    let rawContent = fs.readFileSync(path.join(dir, file), "utf-8");
    let { content, frontmatter } = await mdxCompiler(rawContent);
    let slug = path.basename(file, path.extname(file));

    return {
      frontmatter: frontmatter as { title: string; publishedAt: string },
      content,
      slug,
    };
  });

  return await Promise.all(promises);
}

export function formatDate(date: string, includeRelative = false) {
  let currentDate = new Date();
  if (!date.includes("T")) {
    date = `${date}T00:00:00`;
  }
  let targetDate = new Date(date);

  let yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
  let monthsAgo = currentDate.getMonth() - targetDate.getMonth();
  let daysAgo = currentDate.getDate() - targetDate.getDate();

  let formattedDate = "";

  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo}y ago`;
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo}mo ago`;
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}d ago`;
  } else {
    formattedDate = "Today";
  }

  let fullDate = targetDate.toLocaleString("en-us", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  if (!includeRelative) {
    return fullDate;
  }

  return `${fullDate} (${formattedDate})`;
}
export async function getBlogPosts() {
  return await getMDXData();
}
