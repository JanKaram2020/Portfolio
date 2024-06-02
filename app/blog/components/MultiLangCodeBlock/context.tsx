import React, { useContext } from "react";

export const MultiLangCodeBlockContext = React.createContext<
  string[] | undefined
>(undefined);

export const useMultiLangCodeBlockContext = () =>
  useContext(MultiLangCodeBlockContext);
