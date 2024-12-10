import React, { CSSProperties, ReactNode } from "react";
import * as Tabs from "@radix-ui/react-tabs";
import { mergeClasses } from "lib/mergeClasses";

const MulitLangTabs = ({
  blocks,
  defaultValue,
  className,
}: {
  blocks: Array<{
    language: string;
    content: ReactNode;
    codeLang: string;
  }>;
  defaultValue: string;
  className?: string;
}) => {
  return (
    <Tabs.Root defaultValue={defaultValue}>
      <Tabs.List
        className={mergeClasses(
          "dark:bg-[var(--shiki-dark-bg)] bg-[var(--shiki-light-bg)] rounded rounded-b-none w-fit px-3",
          "flex flex-row gap-3 mb-[-12px] mt-[12px]",
          className,
        )}
      >
        {blocks.map(({ language }) => {
          return (
            <Tabs.Trigger
              value={language}
              className={"hover:text-red-400 aria-selected:text-red-400"}
              key={language}
            >
              {language}
            </Tabs.Trigger>
          );
        })}
      </Tabs.List>

      {blocks.map(({ language, content, codeLang }) => {
        return (
          <Tabs.Content
            value={language}
            key={language}
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
          </Tabs.Content>
        );
      })}
    </Tabs.Root>
  );
};

export default MulitLangTabs;
