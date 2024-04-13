"use client";
import React, { useEffect, useState } from "react";
import { frontMatterId } from "lib/constants";

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
  const [highlighted, setHighlighted] = useState<
    TableOfContentItem["id"] | undefined
  >(undefined);

  useEffect(() => {
    const handleScroll = () => {
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

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      Table of content
      <ol
        className={
          "sticky top-5 h-fit pl-3 border-l-1 text-gray-700 dark:text-gray-300"
        }
      >
        {tableOfContent.map((item) => (
          <li className={item.level > 2 ? "pl-3" : ""} key={item.id}>
            <a
              href={"#" + item.id}
              data-top-element={highlighted === item.id}
              className={
                "hover:text-red-400 data-[top-element='true']:text-red-400"
              }
            >
              {item.text}
            </a>
          </li>
        ))}
      </ol>
    </>
  );
};
export default TableOfContent;
