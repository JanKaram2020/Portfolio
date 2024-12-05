"use client";
import MultiLangFactory from "blog/components/MultiLangFactory";

const { LangOnlyBlock, MultiLangCodeBlock, useSyncSelectedValue, languages } =
  MultiLangFactory(["js", "ts", "react"]);

// must define and export (Limitation in MDX)
export { LangOnlyBlock, MultiLangCodeBlock, useSyncSelectedValue, languages };
