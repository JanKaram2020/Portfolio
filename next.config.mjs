import UnoCSS from '@unocss/webpack'
import mdxMermaid from "mdx-mermaid";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSection from "@hbsnow/rehype-sectionize";
import { visit } from "unist-util-visit";

import MDXCompiler from '@next/mdx'

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
    // Optionally provide remark and rehype plugins
    options: {
        // If you use remark-gfm, you'll need to use next.config.mjs
        // as the package is ESM only
        // https://github.com/remarkjs/remark-gfm#install
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

        // If you use `MDXProvider`, uncomment the following line.
        // providerImportSource: "@mdx-js/react",
    },
})

/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
    reactStrictMode: true,
    webpack: (config) => {
        config.cache = false;
        config.plugins.push(
            UnoCSS(),
        );
        return config;
    },
};
export default withMDX(nextConfig)
