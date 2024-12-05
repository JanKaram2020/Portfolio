import React, { ReactElement, ReactNode } from "react";
import * as Tabs from "@radix-ui/react-tabs";
import { mergeClasses } from "lib/mergeClasses";
import useSyncSelectedValue from "./useSyncSelectedValue";

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

    const blocks: Array<{ language: string; content: ReactNode }> =
      children.map((child, index) => {
        const codeLang = child.props.children.props["data-language"];
        const language = displayValues ? displayValues[index] : codeLang;
        return {
          language,
          content: child as ReactNode,
        };
      });

    const { value, onValueChange, defaultValue } =
      useSyncSelectedValue(displayValues);

    const props = sync
      ? {
          value,
          onValueChange: onValueChange as (v: string) => void,
        }
      : {
          defaultValue,
        };

    return (
      <Tabs.Root {...props}>
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

        {blocks.map(({ language, content }) => {
          return (
            <Tabs.Content value={language} key={language}>
              {content}
            </Tabs.Content>
          );
        })}
      </Tabs.Root>
    );
  };

export default MultiLangCodeBlock;
