"use client";
import React, { useEffect, useState } from "react";
import { frontMatterId } from "lib/constants";
import Link from "next/link";

type TableOfContentItem = {
  text: string;
  level: number;
  id: string;
};

const frontMatter: TableOfContentItem = {
  id: frontMatterId,
  text: "",
  level: 0,
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
          "sticky relative top-5 h-fit pl-3 before:(content-[''] rounded block absolute top-0 h-full left-0 w-0.5 h-full bg-gray-700 dark:bg-gray-300) after:(content-[''] rounded block absolute top-0 left-0 w-0.5 h-full bg-red) text-gray-700 dark:text-gray-300"
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

function useTableScroll(tableOfContent: TableOfContentItem[]) {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [highlighted, setHighlighted] = useState<
    TableOfContentItem["id"] | undefined
  >(undefined);

  useEffect(() => {
    const highlightSetter = () => {
      const tableOfContentWithDistances = tableOfContent
        .concat(frontMatter)
        .map((c) => {
          const distance =
            document.getElementById(c.id)?.getBoundingClientRect().top ?? 0;

          return {
            ...c,
            distance: distance,
          };
        });

      const topElement = tableOfContentWithDistances
        .sort((a, b) => a.distance - b.distance)
        .find((i) => i.distance > 0)?.id;

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
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return [highlighted, scrollPercentage] as const;
}

export default TableOfContent;
