"use client";
import {
  SandpackCodeEditor,
  SandpackFileExplorer,
  type SandpackFiles,
  SandpackLayout,
  SandpackPreview,
  SandpackTests,
  SandpackTranspiledCode,
  SandpackProvider,
} from "@codesandbox/sandpack-react";
import { nightOwl } from "@codesandbox/sandpack-themes";
import { ReactNode, useEffect, useState } from "react";

const EditorFactory = <T extends SandpackFiles>(args: {
  editor?: boolean;
  transpile?: boolean;
  files: T;
  template: Parameters<typeof SandpackProvider>[0]["template"];
  explorer?: boolean;
  preview?: boolean;
  test?: boolean;
  filesExplorer?: "tabs" | "explorer" | "none";
  activeFile?: keyof T;
}) => {
  const props = {
    editor: args.editor ?? true,
    files: args.files,
    template: args.template,
    explorer: args.explorer ?? true,
    preview: args.preview ?? false,
    test: args.test ?? false,
    transpile: args.transpile ?? false,
    filesExplorer: args.filesExplorer ?? "explorer",
    activeFile: args.activeFile
      ? String(args.activeFile)
      : Object.keys(args.files)[0],
  };
  const Provider = ({ children }: { children: ReactNode }) => (
    <div>
      <SandpackProvider
        className={"h-auto b-none"}
        template={props.template}
        files={props.files}
        theme={nightOwl}
        customSetup={{
          dependencies: {
            vitest: "^1.3.1",
          },
        }}
        options={{
          activeFile: props.activeFile,
        }}
      >
        {children}
      </SandpackProvider>
    </div>
  );

  const Editor = ({
    preview = props.preview,
    transpile = props.transpile,
    editor = props.editor,
    test = props.test,
    filesExplorer = props.filesExplorer,
    children,
  }: {
    preview?: boolean;
    transpile?: boolean;
    editor?: boolean;
    test?: boolean;
    filesExplorer?: "tabs" | "explorer" | "none";
    children: ReactNode;
  }) => {
    const [isClient, setClient] = useState(false);
    useEffect(() => {
      setClient(true);
    }, []);

    if (!isClient) {
      return children;
    }

    return (
      <SandpackLayout>
        {editor ? (
          <SandpackCodeEditor showTabs={filesExplorer === "tabs"} />
        ) : null}
        {test ? <SandpackTests /> : null}
        {filesExplorer === "explorer" ? <SandpackFileExplorer /> : null}
        {preview ? <SandpackPreview /> : null}
        {transpile ? <SandpackTranspiledCode /> : null}
      </SandpackLayout>
    );
  };

  return {
    Provider,
    Editor,
  };
};

export default EditorFactory;
