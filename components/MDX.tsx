import React from "react";
import CopyButton from "./CopyButton";

export const PreBLock = (props: any) => {
  const { children, raw, ...other } = props;
  const lang = props["data-language"] || "ts";

  return (
    <pre {...other} className={"mb-3"}>
      <div className={"flex justify-end text-sm p-3 pb-0"}>
        <CopyButton text={raw} />
      </div>
      <div className={"p-3"}>{children}</div>
      <div className={"flex justify-end text-sm p-3"}>
        <p className={"text-gray-100 text-sm"}>{lang}</p>
      </div>
    </pre>
  );
};
export const HeadingTwo = ({ className, ...props }: any) => {
  return (
    <h2
      className={"text-2xl font-bold text-red-400 mt-3 " + className}
      {...props}
    >
      {props.children}
    </h2>
  );
};
export const HeadingThree = ({ className, ...props }: any) => {
  return (
    <h2 className={"text-xl font-semibold py-2 " + className} {...props}>
      {props.children}
    </h2>
  );
};
export const CodeBlock = ({ className, ...props }: any) => {
  return (
    <code
      className={"max-w-full overflow-x-scroll " + (className ?? "")}
      {...props}
    >
      {props.children}
    </code>
  );
};
