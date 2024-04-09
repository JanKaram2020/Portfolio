"use client";
import { MDXRemote } from "next-mdx-remote";
import type { MDXComponents } from "mdx/types";
import { Mermaid } from "mdx-mermaid/lib/Mermaid";
import { CodeBlock, HeadingThree, HeadingTwo, PreBLock } from "./MDX";
function Components(components: MDXComponents): MDXComponents {
  return {
    ...components,
    mermaid: Mermaid,
    Mermaid,
    pre: PreBLock,
    h2: HeadingTwo,
    h3: HeadingThree,
    code: CodeBlock,
  };
}
const CustomMDX = ({ mdxSource }: any) => {
  const { frontMatter, ...other } = mdxSource;
  return <MDXRemote {...other} components={Components} />;
};
export default CustomMDX;
