"use client";
import MultiLangFactory from "../components/MultiLangFactory";

const LangFactory = MultiLangFactory(["js", "ts", "react"]);

const { LangOnlyBlock, MultiLangCodeBlock, MultiLangTextBlock } = LangFactory;

export { LangOnlyBlock, MultiLangCodeBlock, MultiLangTextBlock };
