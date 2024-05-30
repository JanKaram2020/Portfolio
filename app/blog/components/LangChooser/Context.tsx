"use client";

import React, { ReactNode, useContext, useState } from "react";

const ChoicesContext = React.createContext<{
  value: any;
  setValue: (value: any) => void;
}>({
  value: "",
  setValue: () => {},
});

export class ClassChoicesContextFactory<T extends string> {
  values = ["" as T];

  constructor(values: T[]) {
    this.values = values;
  }

  ChoicesProvider({ children }: { children: ReactNode }) {
    const [value, setValue] = useState<T>("" as T);
    return (
      <ChoicesContext.Provider
        value={{
          value,
          setValue,
        }}
      >
        {children}
      </ChoicesContext.Provider>
    );
  }

  useChoicesContext() {
    return useContext(ChoicesContext) as {
      value: T;
      setValue: (value: T) => void;
    };
  }
}
