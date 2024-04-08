import UnoCSS from '@unocss/webpack'
import createMDX from '@next/mdx'
import mdxMermaid from "mdx-mermaid";
import rehypeToc from '@jsdevtools/rehype-toc';
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrettyCode from "rehype-pretty-code";
import {visit} from "unist-util-visit";

const customizeTOC = (toc) => {
    try {
        const {children} = toc;
        const childrenOfChildren = children?.[0]?.children;
        if (!children?.length || !childrenOfChildren?.length) return null;
    } catch (e) {
    }
    return {
        type: 'element',
        tagName: 'div',
        properties: {className: 'toc'},
        children: [
            {
                type: 'element',
                tagName: 'p',
                properties: {className: 'title'},
                children: [
                    {
                        type: 'text',
                        value: 'Table of Contents',
                    },
                ],
            },
            ...(toc.children || []),
        ],
    };
};

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
/** @type {import('rehype-pretty-code').Options} */
const options = {
    theme: "night-owl"
}
const withMDX = createMDX({
    // Add markdown plugins here, as desired
    options: {
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
            },
            [rehypePrettyCode, options],
            () => (tree) => {
                visit(tree, (node) => {
                    if (node?.type === "element" && node?.tagName === "figure") {
                        if (!("data-rehype-pretty-code-figure" in node.properties)) {
                            return;
                        }
                        const preElement = node.children.at(-1);
                        if(preElement.tagName !== "pre"){
                            return;
                        }
                        preElement.properties["__withMeta__"] = node.children.at(0).tagName === "div";
                        preElement.properties["raw"] = node.raw;
                    }
                });
            },
            rehypeSlug,
            rehypeAutolinkHeadings,
            [rehypeToc, {customizeTOC}]
        ],
    },
})
export default withMDX(nextConfig)
