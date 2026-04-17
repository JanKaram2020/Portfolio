import React, { CSSProperties, ReactElement, ReactNode } from "react";
import { Link } from "next-view-transitions";
import { mergeClasses } from "lib/mergeClasses";
import useSyncSelectedValue from "./useSyncSelectedValue";
import dynamic from "next/dynamic";

const MultiLangTabs = dynamic(() => import("./MulitLangTabs"), {
  loading: () => <p>Loading...</p>,
});

function dataLanguageFromPreBlock(child: ReactElement): string {
  if (!React.isValidElement(child)) return "";
  const inner = (child.props as { children?: ReactNode }).children;
  if (
    React.isValidElement(inner) &&
    inner.props &&
    "data-language" in (inner.props as object)
  ) {
    return String(
      (inner.props as Record<string, unknown>)["data-language"] ?? "",
    );
  }
  const fromArray = React.Children.toArray(inner).find(
    (n) =>
      React.isValidElement(n) &&
      n.props &&
      "data-language" in (n.props as object),
  );
  if (React.isValidElement(fromArray) && fromArray.props) {
    return String(
      (fromArray.props as Record<string, unknown>)["data-language"] ?? "",
    );
  }
  return "";
}

const MultiLangCodeBlock =
  <T extends string>(displayValues: T[], initialValue?: T) =>
  ({
    children,
    className,
    sync = true,
  }: {
    children: ReactElement[];
    className?: string;
    sync?: boolean;
  }) => {
    if (children.length < 2) {
      return children;
    }

    if (displayValues.length !== children.length) {
      throw new Error("displayValues must be the same length as the blocks");
    }

    const blocks: Array<{
      language: T;
      content: ReactNode;
      codeLang: string;
    }> = children.map((child, index) => {
      const codeLang = dataLanguageFromPreBlock(child);
      return {
        language: displayValues[index],
        content: child as ReactNode,
        codeLang,
      };
    });

    const { value, defaultValue, getHref } = useSyncSelectedValue(
      displayValues,
      initialValue,
    );

    const currentBlock = blocks.find((block) => block.language === value);

    if (sync && currentBlock) {
      const { language, content, codeLang } = currentBlock;
      return (
        <div>
          <div
            className={mergeClasses(
              "dark:bg-[var(--shiki-dark-bg)] bg-[var(--shiki-light-bg)] rounded rounded-b-none w-fit px-3",
              "flex flex-row gap-3 mb-[-12px] mt-[12px]",
              className,
            )}
          >
            {blocks.map(({ language }) => {
              return (
                <Link
                  href={getHref(language)}
                  aria-selected={language === value}
                  className={"hover:text-red-400 aria-selected:text-red-400"}
                  key={language}
                  scroll={false}
                >
                  {language}
                </Link>
              );
            })}
          </div>
          <div
            style={
              {
                "--show-lang":
                  language.toLowerCase() === codeLang.toLowerCase()
                    ? "none"
                    : "block",
              } as CSSProperties
            }
          >
            {content}
          </div>
        </div>
      );
    }

    return (
      <MultiLangTabs
        className={className}
        blocks={blocks}
        defaultValue={defaultValue}
      />
    );
  };

export default MultiLangCodeBlock;
