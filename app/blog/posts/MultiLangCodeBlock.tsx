"use client";
import React, { ReactElement, ReactNode } from "react";
import * as Tabs from "@radix-ui/react-tabs";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { mergeClasses } from "../../../lib/mergeClasses";

export const MultiLangCodeBlock = ({
  children,
  className,
}: {
  children: ReactElement[];
  className?: string;
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const isMulti = children.length > 1;

  const blocks: Array<{ language: string; content: ReactNode }> = children.map(
    (child) => {
      return {
        language: child.props.children.props["data-language"],
        content: child as ReactNode,
      };
    },
  );

  const selectedParam = searchParams.get("selected");

  const value =
    selectedParam && blocks.find((b) => b.language === selectedParam)
      ? selectedParam
      : blocks[0].language;

  if (!isMulti) {
    return children;
  }

  return (
    <Tabs.Root
      value={value}
      onValueChange={(e) => {
        const newParams = new URLSearchParams(searchParams);
        newParams.set("selected", e);
        router.replace(`${pathname}?${newParams}`, {
          scroll: false,
        });
      }}
    >
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
            >
              {language}
            </Tabs.Trigger>
          );
        })}
      </Tabs.List>

      {blocks.map(({ language, content }) => {
        return <Tabs.Content value={language}>{content}</Tabs.Content>;
      })}
    </Tabs.Root>
  );
};
