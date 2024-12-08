"use client";
import React, { useEffect, useState } from "react";
import { frontMatterId } from "lib/constants";
import Link from "next/link";

type TableOfContentItem = {
  text: string;
  level: number;
  id: string;
};

const TableOfContent = ({
  tableOfContent,
}: {
  tableOfContent: TableOfContentItem[];
}) => {
  const [highlighted, scrollPercentage] = useTableScroll(tableOfContent);
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
      #table-of-content:after {
        transform-origin: 0%;
        height: ${scrollPercentage}%
      }
    `,
        }}
      ></style>
      Table of content
      <ol
        id={"table-of-content"}
        className={
          "sticky relative top-5 h-fit pl-3 text-gray-700 dark:text-gray-300 " +
          "before:content-[''] before:rounded before:block before:absolute before:top-0 before:h-full before:left-0 before:w-0.5 before:h-full before:bg-gray-700 before:dark:bg-gray-300 " +
          "after:content-[''] after:rounded after:block after:absolute after:top-0 after:left-0 after:w-0.5 after:h-full after:bg-red"
        }
      >
        {tableOfContent.map((item) => (
          <li className={item.level > 2 ? "pl-3" : ""} key={item.id}>
            <Link
              href={"#" + item.id}
              data-top-element={highlighted === item.id}
              className={
                "hover:text-red-400 data-[top-element='true']:text-red-400"
              }
            >
              {item.text}
            </Link>
          </li>
        ))}
      </ol>
    </>
  );
};

const frontMatter: TableOfContentItem = {
  id: frontMatterId,
  text: "",
  level: 0,
};

const useTableScroll = (tableOfContent: TableOfContentItem[]) => {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [highlighted, setHighlighted] = useState<
    TableOfContentItem["id"] | undefined
  >(undefined);

  useEffect(() => {
    const highlightSetter = () => {
      const tableOfContentWithDistances = tableOfContent
        .concat([frontMatter])
        .map((c) => {
          const distance =
            document.getElementById(c.id)?.getBoundingClientRect().top ?? -1;

          return {
            ...c,
            distance: distance,
          };
        });

      const topElement = tableOfContentWithDistances
        .sort((a, b) => a.distance - b.distance)
        .find((i) => i.distance >= 0)?.id;

      setHighlighted(topElement);
    };
    const currentScrollPercentage = () => {
      setScrollPercentage(
        ((document.documentElement.scrollTop + document.body.scrollTop) /
          (document.documentElement.scrollHeight -
            document.documentElement.clientHeight)) *
          100,
      );
    };
    const handleScroll = () => {
      highlightSetter();
      currentScrollPercentage();
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return [highlighted, scrollPercentage] as const;
};

export default TableOfContent;
