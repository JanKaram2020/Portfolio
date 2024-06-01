"use client";
import React, { ReactElement, ReactNode, Suspense, useContext } from "react";
import * as Tabs from "@radix-ui/react-tabs";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { mergeClasses } from "../../../lib/mergeClasses";

const MultiLangCodeBlockContext = React.createContext<string[] | undefined>(
  undefined,
);

export const MultiLangCodeRoot = ({
  children,
  values,
}: {
  children: ReactNode;
  values: string[];
}) => {
  return (
    <Suspense fallback={null}>
      <MultiLangCodeBlockContext.Provider value={values}>
        {children}
      </MultiLangCodeBlockContext.Provider>
    </Suspense>
  );
};

const useMultiLangCodeBlockContext = () =>
  useContext(MultiLangCodeBlockContext);

export const MultiLangCodeBlock = ({
  children,
  className,
  sync,
}: {
  children: ReactElement[];
  className?: string;
  sync?: boolean;
}) => {
  return (
    <Suspense fallback={null}>
      <InnerMultiLangCodeBlock className={className} sync={sync}>
        {children}
      </InnerMultiLangCodeBlock>
    </Suspense>
  );
};

const InnerMultiLangCodeBlock = ({
  children,
  className,
  sync = true,
}: {
  children: ReactElement[];
  className?: string;
  sync?: boolean;
}) => {
  const blocks: Array<{ language: string; content: ReactNode }> = children.map(
    (child) => {
      return {
        language: child.props.children.props["data-language"],
        content: child as ReactNode,
      };
    },
  );
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const displayValues = useMultiLangCodeBlockContext();

  const selectedParam = searchParams.get("selected");

  const value =
    selectedParam && blocks.find((b) => b.language === selectedParam)
      ? selectedParam
      : blocks[0].language;

  if (displayValues && displayValues.length < blocks.length) {
    throw new Error("displayValues must be the same length as the blocks");
  }
  if (children.length < 2) {
    return children;
  }

  return (
    <Tabs.Root
      {...(sync
        ? {
            value,
            onValueChange: (e) => {
              const newParams = new URLSearchParams(searchParams);
              newParams.set("selected", e);
              router.replace(`${pathname}?${newParams}`, {
                scroll: false,
              });
            },
          }
        : {
            defaultValue: blocks[0].language,
          })}
    >
      <Tabs.List
        className={mergeClasses(
          "dark:bg-[var(--shiki-dark-bg)] bg-[var(--shiki-light-bg)] rounded rounded-b-none w-fit px-3",
          "flex flex-row gap-3 mb-[-12px] mt-[12px]",
          className,
        )}
      >
        {blocks.map(({ language }, index) => {
          return (
            <Tabs.Trigger
              value={language}
              className={"hover:text-red-400 aria-selected:text-red-400"}
              key={language}
            >
              {displayValues ? displayValues[index] : language}
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
