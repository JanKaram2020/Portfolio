"use client";
import React, { useState } from "react";
import { Check, Clippy } from "./icons";

const CopyButton = ({ text }: { text: string }) => {
  const [isCopied, setIsCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(text);
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 2700);
  };
  return (
    <button
      disabled={isCopied}
      onClick={copy}
      className={"text-white"}
      title={isCopied ? "Copied" : "Copy"}
    >
      <div className={"relative size-4"}>
        <Clippy
          className={
            "absolute top-0 left-0 transition-all duration-900 ease-in-out text-gray-800 dark:text-gray-100"
          }
          style={{
            strokeDasharray: 50,
            strokeDashoffset: isCopied ? -50 : 0,
          }}
        />
        <Check
          className={
            "text-green-500 absolute top-0 left-0 transition-all duration-900 ease-in-out"
          }
          style={{
            visibility: isCopied ? "visible" : "hidden",
            strokeDasharray: 50,
            strokeDashoffset: isCopied ? 0 : -50,
          }}
        />
      </div>
    </button>
  );
};

export default CopyButton;
