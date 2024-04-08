"use client";
import { ReactNode, useState } from "react";
const CopyButton = ({ text }: { text: string }) => {
  const [isCopied, setIsCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(text);
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 10000);
  };
  return (
    <button disabled={isCopied} onClick={copy} className={"text-white"}>
      {isCopied ? "Copied!" : "Copy"}
    </button>
  );
};
export const PreBLock = (props: any) => {
  const { children, raw, ...other } = props;
  const lang = props["data-language"] || "shell";
  return (
    <pre {...other} className={"p-0 relative max-w-full break-all"}>
      <div className={"absolute top-3 right-3"}>
        <CopyButton text={raw} />
      </div>
      {children}
    </pre>
  );
};
export const HeadingTwo = ({ className, ...props }: any) => {
  return (
    <h2 className={"text-2xl text-red-300 mt-3 " + className} {...props}>
      {props.children}
    </h2>
  );
};
export const HeadingThree = ({ className, ...props }: any) => {
  return (
    <h2 className={"text-xl text-red-100 py-2 " + className} {...props}>
      {props.children}
    </h2>
  );
};
export const CodeBlock = ({ className, ...props }: any) => {
  return (
    <code className={"max-w-full " + (className ?? "")} {...props}>
      {props.children}
    </code>
  );
};
