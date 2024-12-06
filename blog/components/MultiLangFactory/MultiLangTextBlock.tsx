import { ReactNode } from "react";
import useSyncSelectedValue from "./useSyncSelectedValue";

const MultiLangTextBlock =
  <T extends string>(displayValues: T[]) =>
  ({
    children,
    values,
  }:
    | { children: ReactNode[]; values?: never }
    | { children?: never; values: string[] }) => {
    const textArray = children ? children : values ? values : undefined;

    if (!textArray) {
      throw new Error("must provide children or values array");
    }

    const { value } = useSyncSelectedValue(displayValues);

    const valueIndex = displayValues.indexOf(value as T);

    if (valueIndex > -1 && textArray[valueIndex]) {
      return textArray[valueIndex];
    }
    return "";
  };

export default MultiLangTextBlock;
