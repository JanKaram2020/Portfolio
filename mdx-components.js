import MDXComponents from "./blog/components/MDX-Components";

export function useMDXComponents(components) {
  return { ...components, ...MDXComponents };
}
