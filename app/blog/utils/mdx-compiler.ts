import mdxMermaid from "mdx-mermaid";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { compileMDX } from "next-mdx-remote/rsc";
import MDXComponents from "app/blog/components/MDX-Components";
import rehypeSlug from "rehype-slug";
import getHeadings from "./get-headings";
import readingDuration from "./reading-duration";
import rehypeSection from "@hbsnow/rehype-sectionize";
import { rawCodeExtractorOne, rawCodeExtractorTwo } from "./raw-code-extractor";

const mdxCompiler = async (text: string) => {
  const timeToRead = readingDuration(text);
  const tableOfContent = getHeadings(text);
  const { content, frontmatter } = await compileMDX<{
    title: string;
    publishedAt: string;
    summary: string;
  }>({
    source: text,
    options: {
      mdxOptions: {
        remarkPlugins: [mdxMermaid],
        rehypePlugins: [
          rawCodeExtractorOne,
          [
            //@ts-ignore
            rehypePrettyCode,
            {
              theme: {
                light: "catppuccin-latte",
                dark: "night-owl",
              },
            },
          ],
          rawCodeExtractorTwo,
          rehypeSlug,
          rehypeAutolinkHeadings, //@ts-ignore
          rehypeSection,
        ],
        format: "mdx",
      },
      parseFrontmatter: true,
    },
    components: MDXComponents,
  });
  return {
    tableOfContent,
    content,
    frontmatter: { ...frontmatter, timeToRead },
  };
};
export default mdxCompiler;
