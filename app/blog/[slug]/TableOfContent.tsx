import React from "react";
import ContentItem, { TableOfContentItem } from "./ContentItem";

const TableOfContent = ({
  tableOfContent,
}: {
  tableOfContent: TableOfContentItem[];
}) => {
  return (
    <>
      Table of content
      <ol
        className={
          "sticky top-5 h-fit pl-3 border-l-1 text-gray-700 dark:text-gray-300"
        }
      >
        {tableOfContent.map((item) => (
          <ContentItem item={item} key={item.id} />
        ))}
      </ol>
    </>
  );
};

export default TableOfContent;
