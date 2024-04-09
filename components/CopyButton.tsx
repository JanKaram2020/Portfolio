"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

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
    <motion.button
      disabled={isCopied}
      onClick={copy}
      whileHover="animate"
      className={"text-white"}
      title={isCopied ? "Copied" : "Copy"}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="0"
        viewBox="0 0 512 512"
      >
        <motion.rect
          width="336"
          height="336"
          x="128"
          y="128"
          fill={isCopied ? "currentColor" : "none"}
          variants={{
            animate: {
              fill: "currentcolor",
            },
          }}
          strokeLinejoin="round"
          strokeWidth="32"
          rx="57"
          ry="57"
        ></motion.rect>
        <motion.path
          fill={isCopied ? "currentColor" : "none"}
          variants={{
            animate: {
              fill: "currentcolor",
            },
          }}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
          d="M383.5 128l.5-24a56.16 56.16 0 00-56-56H112a64.19 64.19 0 00-64 64v216a56.16 56.16 0 0056 56h24"
        ></motion.path>
      </svg>
    </motion.button>
  );
};

export default CopyButton;
