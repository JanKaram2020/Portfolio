import type { MDXComponents } from "mdx/types";
import { Mermaid } from "mdx-mermaid/lib/Mermaid";
import { ReactNode } from "react";
const CodeBlock = ({ children }: { children?: ReactNode }) => {
  return <div className={"block"}>{children}</div>;
};
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    mermaid: Mermaid,
    Mermaid,
    div: CodeBlock,
  };
}
