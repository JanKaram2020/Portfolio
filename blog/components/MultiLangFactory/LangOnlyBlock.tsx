import React, { ReactNode } from "react";
import useSyncSelectedValue from "./useSyncSelectedValue";

const LangOnlyBlock =
  <T extends string>(displayValues: T[], initialValue?: T) =>
  ({ children, lang }: { children: ReactNode; lang: T }) => {
    const { value } = useSyncSelectedValue(displayValues, initialValue);
    if (value === lang) {
      return children;
    }
    return <></>;
  };

export default LangOnlyBlock;
