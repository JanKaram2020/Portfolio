import React, { CSSProperties, ReactElement, ReactNode } from "react";
import { Link } from "next-view-transitions";
import { mergeClasses } from "lib/mergeClasses";
import useSyncSelectedValue from "./useSyncSelectedValue";
import dynamic from "next/dynamic";

const MultiLangTabs = dynamic(() => import("./MulitLangTabs"), {
  loading: () => <p>Loading...</p>,
});

const MultiLangCodeBlock =
  <T extends string>(displayValues: T[]) =>
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
      const dataLang = child.props.children.props["data-language"];
      const codeLang = dataLang ? String(dataLang) : "";
      return {
        language: displayValues[index],
        content: child as ReactNode,
        codeLang,
      };
    });

    const { value, defaultValue, getHref } =
      useSyncSelectedValue(displayValues);

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
