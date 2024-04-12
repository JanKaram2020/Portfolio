import { visit } from "unist-util-visit";

export const rawCodeExtractorOne = () => (tree: any) => {
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
export const rawCodeExtractorTwo = () => (tree: any) => {
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
