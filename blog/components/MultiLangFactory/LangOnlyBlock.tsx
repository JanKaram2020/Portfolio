import React, { ReactNode } from "react";
import useSyncSelectedValue from "./useSyncSelectedValue";

const LangOnlyBlock =
  <T extends string>(displayValues?: T[]) =>
  ({ children, lang }: { children: ReactNode; lang: T }) => {
    const { value } = useSyncSelectedValue();
    if (value === lang) {
      return children;
    }
    return <></>;
  };

export default LangOnlyBlock;
