"use client";
import { ClassChoicesContextFactory } from "../components/LangChooser/Context";
import { useEffect } from "react";

export const LangContext = new ClassChoicesContextFactory([
  "React",
  "No React",
]);

export const LangChooserProvider = LangContext.ChoicesProvider;

export const LangChooser = () => {
  const { values } = LangContext;
  const { value, setValue } = LangContext.useChoicesContext();

  useEffect(() => {
    console.log(value);
  }, [value]);

  return (
    <div>
      {values.map((v) => {
        return (
          <button key={v} onClick={() => setValue(v)}>
            {v} &nbsp; | &nbsp;
          </button>
        );
      })}
    </div>
  );
};
