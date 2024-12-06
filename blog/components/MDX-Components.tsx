import CopyButton from "./CopyButton";
import { mergeClasses } from "lib/mergeClasses";
import { DetailedHTMLProps, HTMLAttributes } from "react";
import type { MDXComponents } from "mdx/types";
import ListItemColor from "components/ListItemColor";

type Element<T> = DetailedHTMLProps<HTMLAttributes<T>, T>;

const PreBLock = (
  props: Element<HTMLPreElement> & {
    "data-language": string;
    raw: string;
  },
) => {
  const { children, raw, className, ...other } = props;
  const lang = props["data-language"] || "ts";

  return (
    <pre
      className={mergeClasses(
        "mb-3 dark:bg-[var(--shiki-dark-bg)] bg-[var(--shiki-light-bg)]",
        className,
      )}
      {...other}
    >
      <div className={"flex justify-end text-sm p-3 pb-0"}>
        <CopyButton text={raw} />
      </div>
      <div className={"p-3"}>{children}</div>
      <div className={"flex justify-end text-sm p-3"}>
        <p
          className={"text-sm text-gray-800 dark:text-gray-100"}
          style={{
            display: "var(--show-lang, block)",
          }}
        >
          {lang.length === 2 ? lang.toUpperCase() : lang}
        </p>
      </div>
    </pre>
  );
};

const HeadingTwo = ({
  className,
  children,
  ...props
}: Element<HTMLHeadingElement>) => {
  return (
    <h2
      className={mergeClasses(
        "text-2xl font-bold text-red-400 mt-3",
        className,
      )}
      {...props}
    >
      {children}
    </h2>
  );
};

const HeadingThree = ({
  className,
  children,
  ...props
}: Element<HTMLHeadingElement>) => {
  return (
    <h3
      className={mergeClasses("text-xl font-semibold py-2", className)}
      {...props}
    >
      {children}
    </h3>
  );
};

const CodeBlock = ({ className, children, ...props }: Element<HTMLElement>) => {
  return (
    <code
      className={mergeClasses("max-w-full overflow-x-auto", className)}
      {...props}
    >
      {children}
    </code>
  );
};

const OrderedList = ({
  className,
  children,
  ...props
}: Element<HTMLUListElement>) => {
  return (
    <ul className={mergeClasses("list-unordered", className)} {...props}>
      {children}
    </ul>
  );
};

const MDXComponents: MDXComponents = {
  pre: PreBLock as Required<MDXComponents>["pre"],
  h2: HeadingTwo,
  h3: HeadingThree,
  code: CodeBlock,
  ol: OrderedList,
  li: ListItemColor,
};

export default MDXComponents;
