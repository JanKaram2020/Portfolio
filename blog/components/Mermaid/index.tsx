"use client";
import React from "react";
import { useDarkMode } from "hooks/useDarkMode";
import dynamic from "next/dynamic";
import { MermaidProps } from "./types";

const Mermaid = dynamic(() => import("./Mermaid"), {
  ssr: false,
});

const MermaidContainer = ({
  chart,
  ...props
}: Omit<MermaidProps, "isDark">) => {
  const isDark = useDarkMode();
  return (
    <div className={props.className}>
      <Mermaid chart={chart} isDark={isDark} key={String(isDark)} {...props} />
    </div>
  );
};

export default MermaidContainer;
