"use client";
import React, { ReactElement, ReactNode } from "react";
import * as Tabs from "@radix-ui/react-tabs";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export const MultiLangCodeBlock = ({
  children,
}: {
  children: ReactElement[];
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const blocks: Array<{ language: string; content: ReactNode }> = children.map(
    (child) => {
      return {
        language: child.props.children.props["data-language"],
        content: child as ReactNode,
      };
    },
  );
  const value = searchParams.get("selected") ?? blocks[0].language;

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
      <Tabs.List className={"flex flex-row gap-3"}>
        {blocks.map(({ language }) => {
          return <Tabs.Trigger value={language}>{language}</Tabs.Trigger>;
        })}
      </Tabs.List>

      {blocks.map(({ language, content }) => {
        return <Tabs.Content value={language}>{content}</Tabs.Content>;
      })}
    </Tabs.Root>
  );
};
