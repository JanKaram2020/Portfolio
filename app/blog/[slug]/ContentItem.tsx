"use client";
import React from "react";
import { useTableOfContentContext } from "./TableOfContentContext";

export type TableOfContentItem = { text: string; level: number; id: string };

const ContentItem = ({ item }: { item: TableOfContentItem }) => {
  const { highlighted } = useTableOfContentContext();

  return (
    <li className={item.level > 2 ? "pl-3" : ""}>
      <a
        href={"#" + item.id}
        className={`${highlighted === item.id ? "text-red-400 " : ""}hover:text-red-400"`}
      >
        {item.text}
      </a>
    </li>
  );
};

export default ContentItem;
