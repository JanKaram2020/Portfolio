import path from "path";
import fs from "fs";
import mdxCompiler from "./mdx-compiler";

export default async function getBlogPosts(n?: number) {
  const dir = path.join(process.cwd(), "app", "blog", "posts");

  let mdxFiles = fs
    .readdirSync(dir)
    .filter((file) => path.extname(file) === ".mdx");

  const promises = mdxFiles.map(async (file) => {
    let rawContent = fs.readFileSync(path.join(dir, file), "utf-8");
    let { content, frontmatter, tableOfContent } =
      await mdxCompiler(rawContent);
    let slug = path.basename(file, path.extname(file));

    return {
      frontmatter,
      content,
      slug,
      tableOfContent,
    };
  });

  if (n) {
    const articles = await Promise.all(promises.slice(0, n));
    return articles.sort((a, b) => {
      if (
        new Date(a.frontmatter.publishedAt) >
        new Date(b.frontmatter.publishedAt)
      ) {
        return -1;
      }
      return 1;
    });
  }

  const articles = await Promise.all(promises);
  return articles.sort((a, b) => {
    if (
      new Date(a.frontmatter.publishedAt) > new Date(b.frontmatter.publishedAt)
    ) {
      return -1;
    }
    return 1;
  });
}
