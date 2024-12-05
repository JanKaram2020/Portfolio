"use client";
import React, { useEffect } from "react";
import mermaid from "mermaid";
import { mergeClasses } from "../../../lib/mergeClasses";
import { MermaidProps } from "./types";

const Mermaid = ({
  chart,
  isDark,
  className,
  ...props
}: MermaidProps): React.JSX.Element => {
  useEffect(() => {
    mermaid.initialize({
      startOnLoad: true,
      theme: isDark ? "dark" : "default",
      darkMode: isDark,
    });

    mermaid.contentLoaded();
  }, []);

  return (
    <div {...props} className={mergeClasses("mermaid", className)}>
      {chart}
    </div>
  );
};
export default Mermaid;
