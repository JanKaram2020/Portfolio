"use client";
import SuspenseFactory from "components/SuspenseFactory";
import LangOnlyBlockFactory from "./LangOnlyBlock";
import MultiLangTextBlockFactory from "./MultiLangTextBlock";
import MultiLangCodeBlockFactory from "./MultiLangCodeBlock";
import useSyncSelectedValueFactory from "./useSyncSelectedValue";
import LangChangerFactory from "./LangChanger";

const MultiLangFactory = <T extends Readonly<string>>(displayValues: T[]) => {
  const useSyncSelectedValue = () => useSyncSelectedValueFactory(displayValues);
  const LangOnlyBlock = SuspenseFactory(LangOnlyBlockFactory(displayValues));
  const MultiLangTextBlock = SuspenseFactory(
    MultiLangTextBlockFactory(displayValues),
  );
  const MultiLangCodeBlock = SuspenseFactory(
    MultiLangCodeBlockFactory(displayValues),
  );
  const LangChanger = SuspenseFactory(LangChangerFactory(displayValues));

  return {
    LangOnlyBlock,
    MultiLangTextBlock,
    MultiLangCodeBlock,
    useSyncSelectedValue,
    languages: displayValues,
    LangChanger,
  };
};

export default MultiLangFactory;
