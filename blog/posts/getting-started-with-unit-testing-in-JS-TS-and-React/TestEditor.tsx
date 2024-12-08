"use client";
import { ReactNode, useEffect, useState } from "react";
import {
  SandpackCodeEditor,
  SandpackLayout,
  SandpackProvider,
  SandpackTests,
} from "@codesandbox/sandpack-react";
import { nightOwl, githubLight } from "@codesandbox/sandpack-themes";
import SuspenseFactory from "components/SuspenseFactory";
import { useDarkMode } from "hooks/useDarkMode";
import { buildFiles } from "./build-files";
import { LangChanger, useSyncSelectedValue } from "./LangComponents";

const TestEditor = SuspenseFactory(({ children }: { children: ReactNode }) => {
  const [isClient, setIsClient] = useState(false);
  const isDark = useDarkMode();
  const { value } = useSyncSelectedValue();
  const files = buildFiles[value];

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient || !files) {
    return children;
  }

  return (
    <div className={"my-2"}>
      <SandpackProvider
        theme={isDark ? nightOwl : githubLight}
        files={files}
        options={{
          activeFile:
            Object.keys(files).find((f) => f.includes("test")) ??
            Object.keys(files)[0],
          visibleFiles: Object.keys(files),
        }}
      >
        <SandpackLayout>
          <SandpackCodeEditor showLineNumbers />
          <SandpackTests
            actionsChildren={
              <LangChanger
                containerClass={"flex flex-row gap-2 items-center text-base"}
                buttonClass={
                  "dark:bg-[var(--shiki-dark-bg)] bg-[var(--shiki-light-bg)] hover:text-red-400 aria-selected:text-red-400 px-1 py-0.5 rounded"
                }
              />
            }
          />
        </SandpackLayout>
      </SandpackProvider>
    </div>
  );
});

const TestEditorContainer = SuspenseFactory(
  ({ children }: { children: ReactNode }) => {
    const { value } = useSyncSelectedValue();
    return <TestEditor key={value}>{children}</TestEditor>;
  },
);

export default TestEditorContainer;
