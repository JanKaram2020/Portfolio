"use client";
import React, { ReactElement, ReactNode, Suspense } from "react";
import { InnerMultiLangCodeBlock } from "./MultiLangCodeBlock";
import { MultiLangCodeBlockContext } from "./context";

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
