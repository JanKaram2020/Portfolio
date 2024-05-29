import path from "path";
import fs from "fs";
import readingDuration from "./reading-duration";
import getHeadings from "./get-headings";

const sortArticles = <
  T extends {
    frontmatter: {
      publishedAt: string;
    };
  },
>(
  articles: T[],
) => {
  return articles.sort((a, b) => {
    if (
      new Date(a.frontmatter.publishedAt) > new Date(b.frontmatter.publishedAt)
    ) {
      return -1;
    }
    return 1;
  });
};

export function getBlogPostsSlugs() {
  const dir = path.join(process.cwd(), "app", "blog", "posts");

  let mdxFiles = fs
    .readdirSync(dir)
    .filter((file) => path.extname(file) === ".mdx");

  return mdxFiles.map((file) => path.basename(file, path.extname(file)));
}

export default async function getBlogPosts(n?: number) {
  const dir = path.join(process.cwd(), "app", "blog", "posts");

  let mdxFiles = fs
    .readdirSync(dir)
    .filter((file) => path.extname(file) === ".mdx");

  const articles = await Promise.all(
    mdxFiles.map(async (f) => {
      const rawContent = fs.readFileSync(dir + "/" + f, "utf-8");
      const timeToRead = readingDuration(rawContent);
      const tableOfContent = getHeadings(rawContent);
      const fileImport = await import("../posts/" + f);
      let slug = path.basename(f, path.extname(f));
      if (!fileImport.default) {
        throw new Error(`${slug} must have default export`);
      }
      if (!fileImport.PageData) {
        throw new Error(`${slug} must have PageData`);
      }
      return {
        Content: fileImport.default,
        frontmatter: { ...fileImport.PageData, timeToRead },
        tableOfContent,
        slug,
      };
    }),
  );

  if (n) {
    return sortArticles(articles).slice(0, n);
  }

  return sortArticles(articles);
}
