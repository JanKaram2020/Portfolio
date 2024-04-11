import React from "react";
import CopyButton from "./CopyButton";
import { Mermaid } from "mdx-mermaid/lib/Mermaid";

const PreBLock = (props: any) => {
  const { children, raw, ...other } = props;
  const lang = props["data-language"] || "ts";

  return (
    <pre
      {...other}
      className={
        "mb-3 dark:bg-[var(--shiki-dark-bg)] bg-[var(--shiki-light-bg)]"
      }
    >
      <div className={"flex justify-end text-sm p-3 pb-0"}>
        <CopyButton text={raw} />
      </div>
      <div className={"p-3"}>{children}</div>
      <div className={"flex justify-end text-sm p-3"}>
        <p className={"text-sm text-gray-800 dark:text-gray-100"}>{lang}</p>
      </div>
    </pre>
  );
};
const HeadingTwo = ({ className, ...props }: any) => {
  return (
    <h2
      className={"text-2xl font-bold text-red-400 mt-3 " + className}
      {...props}
    >
      {props.children}
    </h2>
  );
};
const HeadingThree = ({ className, ...props }: any) => {
  return (
    <h2 className={"text-xl font-semibold py-2 " + className} {...props}>
      {props.children}
    </h2>
  );
};
const CodeBlock = ({ className, ...props }: any) => {
  return (
    <code
      className={"max-w-full overflow-x-scroll " + (className ?? "")}
      {...props}
    >
      {props.children}
    </code>
  );
};

const MDXComponents = {
  mermaid: Mermaid,
  Mermaid,
  pre: PreBLock,
  h2: HeadingTwo,
  h3: HeadingThree,
  code: CodeBlock,
};
export default MDXComponents;
