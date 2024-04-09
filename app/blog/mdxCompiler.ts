import mdxMermaid from "mdx-mermaid";
import { visit } from "unist-util-visit";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeToc from "@jsdevtools/rehype-toc";
import { compileMDX } from "next-mdx-remote/rsc";
import { Mermaid } from "mdx-mermaid/lib/Mermaid";
import {
  CodeBlock,
  HeadingThree,
  HeadingTwo,
  PreBLock,
} from "../../components/MDX";

const customizeTOC = (toc: any) => {
  try {
    const { children } = toc;
    const childrenOfChildren = children?.[0]?.children;
    if (!children?.length || !childrenOfChildren?.length) return null;
  } catch (e) {}
  return {
    type: "element",
    tagName: "div",
    properties: { className: "toc" },
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
  };
};
const options = {
  theme: "night-owl",
};
const Components = {
  mermaid: Mermaid,
  Mermaid,
  pre: PreBLock,
  h2: HeadingTwo,
  h3: HeadingThree,
  code: CodeBlock,
};
export const mdxCompiler = async (text: string) => {
  const { content, frontmatter } = await compileMDX({
    source: text,
    options: {
      mdxOptions: {
        remarkPlugins: [mdxMermaid],
        rehypePlugins: [
          () => (tree) => {
            visit(tree, (node) => {
              if (node?.type === "element" && node?.tagName === "pre") {
                const [codeEl] = node.children;

                if (codeEl.tagName !== "code") return;

                node.raw = codeEl.children?.[0].value;
              }
            });
          }, //@ts-ignore
          [rehypePrettyCode, options],
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
          [rehypeToc, { customizeTOC }],
        ],
        format: "mdx",
      },
      parseFrontmatter: true,
    },
    components: Components,
  });
  return { content, frontmatter };
};
