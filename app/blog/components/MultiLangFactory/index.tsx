"use client";
import React, { ReactElement, ReactNode, Suspense } from "react";
import * as Tabs from "@radix-ui/react-tabs";
import { mergeClasses } from "lib/mergeClasses";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const SuspenseFactory = <T extends {}>(Component: (args: T) => ReactNode) => {
  return (props: T) => (
    <Suspense fallback={null}>
      <Component {...props} />
    </Suspense>
  );
};

const Factory = <T extends string>(displayValues?: T[]) => {
  const useSyncSelectedValue = (props?: {
    blocks?: Array<{ language: string; content: ReactNode }>;
  }) => {
    const blocks = props?.blocks;
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const selectedParam = searchParams.get("selected");
    const defaultValue = blocks?.[0].language;

    const value = `${
      selectedParam &&
      blocks &&
      blocks.find((b) => b.language === selectedParam)
        ? selectedParam
        : blocks
          ? defaultValue
          : selectedParam
    }`;

    const onValueChange = (v: string) => {
      const newParams = new URLSearchParams(searchParams);
      newParams.set("selected", v);
      router.replace(`${pathname}?${newParams}`, {
        scroll: false,
      });
    };

    return {
      value,
      onValueChange,
      defaultValue,
    };
  };

  const MultiLangCodeBlock = SuspenseFactory(
    ({
      children,
      className,
      sync = true,
    }: {
      children: ReactElement[];
      className?: string;
      sync?: boolean;
    }) => {
      const blocks: Array<{ language: string; content: ReactNode }> =
        children.map((child, index) => {
          const codeLang = child.props.children.props["data-language"];
          const language = displayValues ? displayValues[index] : codeLang;
          return {
            language,
            content: child as ReactNode,
          };
        });

      const { value, onValueChange, defaultValue } = useSyncSelectedValue({
        blocks,
      });

      if (children.length < 2) {
        return children;
      }

      if (displayValues && displayValues.length < blocks.length) {
        throw new Error(
          "displayValues must be the same length or more than the blocks",
        );
      }

      const props = sync
        ? {
            value,
            onValueChange,
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
    },
  );

  const LangOnlyBlock = SuspenseFactory(
    ({ children, lang }: { children: ReactNode; lang: T }) => {
      const { value } = useSyncSelectedValue();
      if (value === lang) {
        return children;
      }
      return <></>;
    },
  );

  const MultiLangTextBlock = SuspenseFactory(
    ({
      children,
      values,
    }:
      | { children: ReactNode[]; values?: never }
      | { children?: never; values: string[] }) => {
      const textArray = children ? children : values ? values : undefined;

      if (!textArray) {
        throw new Error("must provide children or values array");
      }

      const { value } = useSyncSelectedValue();

      if (!displayValues) {
        throw new Error(
          "displayValues must be provided if MultiLangTextBlock is used",
        );
      }
      const valueIndex = displayValues.indexOf(value as T);

      if (valueIndex > -1 && textArray[valueIndex]) {
        return textArray[valueIndex];
      }
      return <></>;
    },
  );

  return {
    LangOnlyBlock,
    MultiLangTextBlock,
    MultiLangCodeBlock,
  };
};

export default Factory;
