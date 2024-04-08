import type { MDXComponents } from "mdx/types";
import { Mermaid } from "mdx-mermaid/lib/Mermaid";
import {
  CodeBlock,
  HeadingThree,
  HeadingTwo,
  PreBLock,
} from "./components/MDX";

export function useMDXComponents(components: MDXComponents): MDXComponents {
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
