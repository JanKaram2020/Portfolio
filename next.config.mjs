import UnoCSS from '@unocss/webpack'
import createMDX from '@next/mdx'
import mdxMermaid from "mdx-mermaid";
import rehypeToc from '@jsdevtools/rehype-toc';
import rehypeSlug from "rehype-slug";
import rehypeHighlight from 'rehype-highlight'

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

const withMDX = createMDX({
    // Add markdown plugins here, as desired
    options: {
        remarkPlugins: [mdxMermaid],
        rehypePlugins: [
            rehypeHighlight,
            rehypeSlug,
            [rehypeToc, {customizeTOC}]],
    },
})
export default withMDX(nextConfig)
