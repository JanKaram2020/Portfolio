import MDXComponents from "./app/blog/components/MDX-Components";

export function useMDXComponents(components) {
  return { ...components, ...MDXComponents };
  // Allows customizing built-in components, e.g. to add styling.
  // return {
  //   h1: ({ children }) => <h1 style={{ fontSize: "100px" }}>{children}</h1>,
  //   ...components,
  // }
}
