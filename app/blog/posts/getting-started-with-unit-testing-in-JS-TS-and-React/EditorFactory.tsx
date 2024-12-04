"use client";
import {
  SandpackCodeEditor,
  SandpackLayout,
  SandpackProvider,
  SandpackTests,
} from "@codesandbox/sandpack-react";
import { nightOwl } from "@codesandbox/sandpack-themes";
import { ReactNode, useEffect, useState } from "react";

export const buildFiles = {
  "add.test.ts": `
import { add } from "./add";

test("add()", () => {
 expect(add(1, 2)).toBe(3);
});
`.trim(),
  "add.ts": `export const add = (a: number, b: number) => a + b;`,
};

export const Editor = ({ children }: { children: ReactNode }) => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  if (!isClient) {
    return children;
  }
  return (
    <SandpackProvider
      template={"test-ts"}
      theme={nightOwl}
      files={buildFiles}
      // customSetup={{
      //   environment: "node",
      // }}
      // options={{
      //   visibleFiles: ["add.test.ts", "add.ts"],
      // }}
    >
      <SandpackLayout>
        <SandpackCodeEditor showLineNumbers />
        <SandpackTests />
      </SandpackLayout>
    </SandpackProvider>
  );
};
