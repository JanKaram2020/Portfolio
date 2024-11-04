import path from "path";
import fs from "fs";
import readingDuration from "./reading-duration";
import getHeadings from "./get-headings";
import sortArticles from "./sort-articles";

async function innerGetPosts() {
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

  return sortArticles(articles);
}

let cachedArticles:
  | {
      Content: () => JSX.Element;
      frontmatter: {
        title: string;
        summary: string;
        publishedAt: `${number}-${number}-${number}`;
        timeToRead: string;
      };
      tableOfContent: { text: string; level: number; id: string }[];
      slug: string;
    }[]
  | undefined;

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
