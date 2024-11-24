if (
  process.env.LD_LIBRARY_PATH == null ||
  !process.env.LD_LIBRARY_PATH.includes(
    `${process.env.PWD}/node_modules/canvas/build/Release:`,
  )
) {
  process.env.LD_LIBRARY_PATH = `${
    process.env.PWD
  }/node_modules/canvas/build/Release:${process.env.LD_LIBRARY_PATH || ""}`;
}

import UnoCSS from "@unocss/webpack";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSection from "@hbsnow/rehype-sectionize";
import { visit } from "unist-util-visit";

import MDXCompiler from "@next/mdx";

export const rawCodeExtractorOne = () => (tree) => {
  visit(tree, (node) => {
    if (node?.type === "root") {
      node.parent = { type: "element", tagName: "dic" };
    }
    if (node?.type === "element" && node?.tagName === "pre") {
      const [codeEl] = node.children;

      if (codeEl.tagName !== "code") return;

      node.raw = codeEl.children?.[0].value;
    }
  });
};
export const rawCodeExtractorTwo = () => (tree) => {
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
};

const withMDX = MDXCompiler({
  options: {
    remarkPlugins: [],
    rehypePlugins: [
      rawCodeExtractorOne,
      [
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
      rehypeAutolinkHeadings,
      rehypeSection,
    ],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  reactStrictMode: true,
  webpack: (config) => {
    config.cache = false;
    config.plugins.push(UnoCSS());
    return config;
  },
};
export default withMDX(nextConfig);
