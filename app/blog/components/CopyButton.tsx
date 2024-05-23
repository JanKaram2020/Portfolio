"use client";
import React, { useState } from "react";

function Clippy(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M5.75 4.75H10.25V1.75H5.75V4.75Z" />
      <path d="M3.25 2.88379C2.9511 3.05669 2.75 3.37987 2.75 3.75001V13.25C2.75 13.8023 3.19772 14.25 3.75 14.25H12.25C12.8023 14.25 13.25 13.8023 13.25 13.25V3.75001C13.25 3.37987 13.0489 3.05669 12.75 2.88379" />
    </svg>
  );
}

function Check(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M13.25 4.75L6 12L2.75 8.75" />
    </svg>
  );
}
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
