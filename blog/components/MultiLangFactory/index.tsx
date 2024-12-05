"use client";
import SuspenseFactory from "components/SuspenseFactory";
import LangOnlyBlockFactory from "./LangOnlyBlock";
import MultiLangTextBlockFactory from "./MultiLangTextBlock";
import MultiLangCodeBlockFactory from "./MultiLangCodeBlock";
import useSyncSelectedValueFactory from "./useSyncSelectedValue";

const MultiLangFactory = <T extends Readonly<string>>(displayValues: T[]) => {
  const LangOnlyBlock = SuspenseFactory(LangOnlyBlockFactory(displayValues));
  const MultiLangTextBlock = SuspenseFactory(
    MultiLangTextBlockFactory(displayValues),
  );
  const MultiLangCodeBlock = SuspenseFactory(
    MultiLangCodeBlockFactory(displayValues),
  );
  const useSyncSelectedValue = () => useSyncSelectedValueFactory(displayValues);

  return {
    LangOnlyBlock,
    MultiLangTextBlock,
    MultiLangCodeBlock,
    useSyncSelectedValue,
    languages: displayValues,
  };
};

export default MultiLangFactory;
