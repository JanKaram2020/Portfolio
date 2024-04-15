import path from "path";
import fs from "fs";
import mdxCompiler from "./mdx-compiler";

export default async function getBlogPosts() {
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

  return await Promise.all(promises);
}
