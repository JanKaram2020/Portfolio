import path from "path";
import fs from "fs";
import readingDuration from "./reading-duration";
import getHeadings from "./get-headings";
import sortArticles from "./sort-articles";

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
      const slug = path.basename(f, path.extname(f));
      const rawContent = fs.readFileSync(dir + "/" + f, "utf-8");
      const timeToRead = readingDuration(rawContent);
      const tableOfContent = getHeadings(rawContent);
      const fileImport = await import("../posts/" + f);

      const Content = fileImport.default as () => JSX.Element;

      const frontmatter = {
        ...fileImport.frontmatter,
        timeToRead,
      } as {
        title: string;
        summary: string;
        publishedAt: `${number}-${number}-${number}`;
        timeToRead: string;
      };

      if (!Content) {
        throw new Error(`${slug} must have default export`);
      }

      if (
        !frontmatter ||
        !frontmatter.title ||
        !frontmatter.summary ||
        !frontmatter.publishedAt
      ) {
        throw new Error(
          `${slug} must have frontmatter with title, summary and publishedAt`,
        );
      }

      return {
        Content,
        frontmatter,
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
