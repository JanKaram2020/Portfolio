"use client";
import MultiLangFactory from "blog/components/MultiLangFactory";

const { LangOnlyBlock, MultiLangCodeBlock, useSyncSelectedValue, languages } =
  MultiLangFactory(["JS", "TS", "React"]);

// must define and export (Limitation in MDX)
export { LangOnlyBlock, MultiLangCodeBlock, useSyncSelectedValue, languages };
