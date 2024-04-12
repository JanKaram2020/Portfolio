"use client";
import React, { ReactNode, useContext, useEffect, useState } from "react";
import { TableOfContentItem } from "./ContentItem";

const TableOfContentContext = React.createContext<{
  tableOfContent: {
    highlighted: boolean;
    text: string;
    level: number;
    id: string;
  }[];
  highlighted: string | undefined;
  setHighlighted: (id: string) => void;
}>({
  tableOfContent: [],
  highlighted: undefined,
  setHighlighted: (id: string) => {},
});
export const useTableOfContentContext = () => useContext(TableOfContentContext);

export const TableOfContentProvider = ({
  children,
  tableOfContent,
}: {
  children: ReactNode;
  tableOfContent: TableOfContentItem[];
}) => {
  const [highlightTableOfContent, setHighlightTableOfContent] = useState(
    tableOfContent.map((c) => ({
      ...c,
      highlighted: false,
    })),
  );
  const setHighlightedItem = (id: TableOfContentItem["id"]) => {
    const index = highlightTableOfContent.findIndex((c) => c.id === id);
    const newTableOfContent = highlightTableOfContent.map((c, i) => {
      if (i < index) {
        return {
          ...c,
          highlighted: false,
        };
      }
      if (i === index) {
        return {
          ...c,
          highlighted: true,
        };
      }
      return { ...c, highlighted: false };
    });
    setHighlightTableOfContent(newTableOfContent);
  };

  useEffect(() => {
    let observers = tableOfContent.map(({ id }) => {
      const current = document.getElementById(id);

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const intersecting = entry.isIntersecting;
            if (intersecting) {
              setHighlightedItem(id);
            }
          });
        },
        {
          // threshold: 1,
          // rootMargin: "-300px",
        },
      );
      if (current) {
        observer.observe(current);
      }
      return observer;
    });

    return () => {
      observers.forEach((o) => o.disconnect());
    };
  }, [tableOfContent]);

  return (
    <TableOfContentContext.Provider
      value={{
        tableOfContent: highlightTableOfContent,
        highlighted: highlightTableOfContent.find((i) => i.highlighted)?.id,
        setHighlighted: setHighlightedItem,
      }}
    >
      {children}
    </TableOfContentContext.Provider>
  );
};
