import React from "react";
import path from "path";
import fs from "fs";
import readingDuration from "./reading-duration";
import getHeadings from "./get-headings";
import sortArticles from "./sort-articles";
import getMdxFilesRecursively from "./get-mdx-files-recursively";
import generateImage from "./generate-image";
import type { BlogPosts, FrontMatter } from "../types";

const innerGetPosts = async () => {
  const dir = path.join(process.cwd(), "app", "blog", "posts");
  const mdxFiles = getMdxFilesRecursively(dir);
  const articles = await Promise.all(
    mdxFiles.map(async (f) => {
      const slug = path
        .relative(dir, f)
        .replace(/\\/g, "/")
        .replace(/\.mdx$/, "")
        .replace("/index", "")
        .toLowerCase();
      const rawContent = fs.readFileSync(f, "utf-8");
      const timeToRead = readingDuration(rawContent);
      const tableOfContent = getHeadings(rawContent);
      const relativeFilePath = f.split("/posts/")[1];
      const fileImport = await import("../posts/" + relativeFilePath);

      const Content = fileImport.default as () => React.JSX.Element;

      const frontMatter = {
        ...fileImport.frontMatter,
        timeToRead,
      } as FrontMatter;

      if (!Content) {
        throw new Error(`${slug} must have default export`);
      }

      if (
        !frontMatter ||
        !frontMatter.title ||
        !frontMatter.summary ||
        !frontMatter.publishedAt
      ) {
        throw new Error(
          `${slug} must have frontMatter with title, summary and publishedAt`,
        );
      }

      await generateImage({
        slug,
        frontMatter,
      });

      return {
        Content,
        frontMatter,
        tableOfContent,
        slug,
      };
    }),
  );

  return sortArticles(articles);
};

let cachedArticles: BlogPosts | undefined;

export async function getBlogPostsSlugs() {
  const blogPosts = await getBlogPosts();
  return blogPosts.map((b) => b.slug);
}

export default async function getBlogPosts(n?: number) {
  const articles = cachedArticles ? cachedArticles : await innerGetPosts();
  cachedArticles = articles;
  if (n) {
    return articles.slice(0, n);
  }
  return articles;
}
