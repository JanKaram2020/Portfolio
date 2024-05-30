import MDXComponents from "./app/blog/components/MDX-Components";

export function useMDXComponents(components) {
  return { ...components, ...MDXComponents };
}
