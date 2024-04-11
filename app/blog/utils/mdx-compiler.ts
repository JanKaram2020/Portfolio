import mdxMermaid from "mdx-mermaid";
import { visit } from "unist-util-visit";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeToc from "@jsdevtools/rehype-toc";
import { compileMDX } from "next-mdx-remote/rsc";
import MDXComponents from "components/MDX-Components";
import GithubSlugger from "github-slugger";
import rehypeSlug from "rehype-slug";

function getHeadings(source: string) {
  const slugs = new GithubSlugger();

  // Get each line individually, and filter out anything that
  // isn't a heading.
  const headingLines = source.split("\n").filter((line) => {
    return line.match(/^###*\s/);
  });

  // Transform the string '## Some text' into an object
  // with the shape '{ text: 'Some text', level: 2 }'
  return headingLines.map((raw) => {
    const text = raw.replace(/^###*\s/, "").replace("\\", "");
    // I only care about h2 and h3.
    // If I wanted more levels, I'd need to count the
    // number of #s.
    const level = raw.slice(0, 3) === "###" ? 3 : 2;

    return { text, level, id: slugs.slug(text) };
  });
}

function readingDuration(text: string, wordsPerMinute = 200): string {
  const words = text.split(/\s+/).length;
  const readingTime = Math.ceil(words / wordsPerMinute);

  return `${readingTime} min read`;
}
const customizeTOC = (toc: any) => {
  try {
    const { children } = toc;
    const childrenOfChildren = children?.[0]?.children;
    if (!children?.length || !childrenOfChildren?.length) return null;
  } catch (e) {}
  return {
    type: "element",
    tagName: "aside",
    properties: {
      className: "toc-container",
    },
    children: [
      {
        type: "element",
        tagName: "div",
        properties: {
          className: "toc",
        },
        children: [
          {
            type: "element",
            tagName: "p",
            properties: { className: "title" },
            children: [
              {
                type: "text",
                value: "Table of Contents",
              },
            ],
          },
          ...(toc.children || []),
        ],
      },
    ],
  };
};

const mdxCompiler = async (text: string) => {
  const timeToRead = readingDuration(text);
  const tableOfContent = getHeadings(text);
  const { content, frontmatter } = await compileMDX({
    source: text,
    options: {
      mdxOptions: {
        remarkPlugins: [mdxMermaid],
        rehypePlugins: [
          () => (tree) => {
            visit(tree, (node, index, parent) => {
              if (node?.type === "root") {
                node.parent = { type: "element", tagName: "dic" };
              }
              if (node?.type === "element" && node?.tagName === "pre") {
                const [codeEl] = node.children;

                if (codeEl.tagName !== "code") return;

                node.raw = codeEl.children?.[0].value;
              }
            });
          },
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
          () => (tree) => {
            visit(tree, (node) => {
              if (node?.type === "element" && node?.tagName === "figure") {
                if (!("data-rehype-pretty-code-figure" in node.properties)) {
                  return;
                }
                const preElement = node.children.at(-1);
                if (preElement.tagName !== "pre") {
                  return;
                }
                preElement.properties["__withMeta__"] =
                  node.children.at(0).tagName === "div";
                preElement.properties["raw"] = node.raw;
              }
            });
          },
          rehypeSlug,
          rehypeAutolinkHeadings, //@ts-ignore
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
