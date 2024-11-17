"use client";
import MultiLangFactory from "../../components/MultiLangFactory";

const LangFactory = MultiLangFactory(["js", "ts", "react"]);

const { LangOnlyBlock, MultiLangCodeBlock, MultiLangTextBlock } = LangFactory;
// must define and export (Limitation in MDX)
export { LangOnlyBlock, MultiLangCodeBlock, MultiLangTextBlock };
