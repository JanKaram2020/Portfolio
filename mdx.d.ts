declare module "*.mdx" {
  import { FrontMatter } from "./blog/types";
  let MDXComponent: (props) => JSX.Element;
  export default MDXComponent;

  export const frontMatter: FrontMatter;
}
