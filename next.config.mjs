import UnoCSS from '@unocss/webpack'

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
export default nextConfig
