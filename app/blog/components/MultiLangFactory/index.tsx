"use client";
import SuspenseFactory from "./SuspenseFactory";
import LangOnlyBlockFactory from "./LangOnlyBlock";
import MultiLangTextBlockFactory from "./MultiLangTextBlock";
import MultiLangCodeBlockFactory from "./MultiLangCodeBlock";

const MultiLangFactory = <T extends string>(displayValues?: T[]) => {
  const LangOnlyBlock = SuspenseFactory(LangOnlyBlockFactory(displayValues));
  const MultiLangTextBlock = SuspenseFactory(
    MultiLangTextBlockFactory(displayValues),
  );
  const MultiLangCodeBlock = SuspenseFactory(
    MultiLangCodeBlockFactory(displayValues),
  );

  return {
    LangOnlyBlock,
    MultiLangTextBlock,
    MultiLangCodeBlock,
  };
};

export default MultiLangFactory;
