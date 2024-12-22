"use client";
import SuspenseFactory from "components/SuspenseFactory";
import LangOnlyBlockFactory from "./LangOnlyBlock";
import MultiLangTextBlockFactory from "./MultiLangTextBlock";
import MultiLangCodeBlockFactory from "./MultiLangCodeBlock";
import useSyncSelectedValueFactory from "./useSyncSelectedValue";
import LangChangerFactory from "./LangChanger";

const MultiLangFactory = <T extends Readonly<string>>(
  slug: string,
  displayValues: T[],
  initialValue?: T,
) => {
  const useSyncSelectedValue = () =>
    useSyncSelectedValueFactory(displayValues, initialValue);

  const LangOnlyBlock = SuspenseFactory(
    LangOnlyBlockFactory(displayValues, initialValue),
    true,
  );
  const MultiLangTextBlock = SuspenseFactory(
    MultiLangTextBlockFactory(displayValues, initialValue),
    true,
  );
  const MultiLangCodeBlock = SuspenseFactory(
    MultiLangCodeBlockFactory(displayValues, initialValue),
    true,
  );
  const LangChanger = LangChangerFactory(slug, displayValues, initialValue);

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
