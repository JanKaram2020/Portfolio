"use client";
import MultiLangFactory from "blog/components/MultiLangFactory";
import { frontMatter } from "./index.mdx";

const {
  LangOnlyBlock,
  MultiLangCodeBlock,
  useSyncSelectedValue,
  languages,
  LangChanger,
  MultiLangTextBlock,
} = MultiLangFactory(frontMatter.slug, ["JS", "TS", "React"], "React");

// must define and export (Limitation in MDX)
export {
  LangOnlyBlock,
  MultiLangCodeBlock,
  useSyncSelectedValue,
  languages,
  LangChanger,
  MultiLangTextBlock,
};
