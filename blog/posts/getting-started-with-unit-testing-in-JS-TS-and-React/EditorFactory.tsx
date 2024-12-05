"use client";
import {
  SandpackCodeEditor,
  SandpackLayout,
  SandpackProvider,
  SandpackTests,
} from "@codesandbox/sandpack-react";
import { nightOwl } from "@codesandbox/sandpack-themes";
import { ReactNode, useEffect, useState } from "react";
import useSyncSelectedValue from "../../components/MultiLangFactory/useSyncSelectedValue";
import SuspenseFactory from "../../components/MultiLangFactory/SuspenseFactory";

const Languages = ["js", "ts", "react"] as const;

export const buildFiles: {
  [K in (typeof Languages)[number]]: Record<string, string>;
} = {
  js: {
    "add.test.js": `
import { add } from "./add";

test("add()", () => {
 expect(add(1, 2)).toBe(3);
});
`.trim(),
    "add.js": `export const add = (a, b) => a + b;`,
  },
  ts: {
    "add.test.ts": `
import { add } from "./add";

test("add()", () => {
 expect(add(1, 2)).toBe(3);
});
`.trim(),
    "add.ts": `export const add = (a: number, b: number) => a + b;`,
  },
  react: {
    "add.test.ts": `
import { add } from "./add";

test("add()", () => {
 expect(add(1, 2)).toBe(3);
});
`.trim(),
    "add.ts": `export const add = (a: number, b: number) => a + b;`,
  },
};

export const Editor = SuspenseFactory(
  ({ children }: { children: ReactNode }) => {
    const [isClient, setIsClient] = useState(false);
    const { value: syncValue, onValueChange } = useSyncSelectedValue({
      defaultValue: "js",
    });
    const value = Languages.includes(syncValue as (typeof Languages)[number])
      ? syncValue
      : Languages[0];
    const files = buildFiles[value as keyof typeof buildFiles];

    useEffect(() => {
      setIsClient(true);
    }, []);

    if (!isClient || !files) {
      return children;
    }

    return (
      <div className={"my-2"}>
        <SandpackProvider
          template={"test-ts"}
          theme={nightOwl}
          files={files}
          options={{
            activeFile: Object.keys(files).find((f) => f.includes("test")),
            visibleFiles: Object.keys(files),
          }}
        >
          <SandpackLayout>
            <SandpackCodeEditor showLineNumbers />
            <SandpackTests
              actionsChildren={
                <div className="flex flex-row gap-2 items-center text-base">
                  {Languages.map((l) => (
                    <button
                      aria-selected={value === l}
                      className={
                        "hover:text-red-400 aria-selected:text-red-400"
                      }
                      onClick={() => onValueChange(l)}
                    >
                      {l}
                    </button>
                  ))}
                </div>
              }
            />
          </SandpackLayout>
        </SandpackProvider>
      </div>
    );
  },
);
