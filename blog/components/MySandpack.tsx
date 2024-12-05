"use client";
import {
  SandpackCodeEditor,
  SandpackFileExplorer,
  type SandpackFiles,
  SandpackLayout,
  SandpackPreview,
  SandpackProvider,
  SandpackTranspiledCode,
} from "@codesandbox/sandpack-react";
import { nightOwl } from "@codesandbox/sandpack-themes";

export default function MySandpack({
  editor: preview = true,
  transpile = false,
  files,
  filesTab = true,
  template,
}: {
  editor?: boolean;
  transpile?: boolean;
  files: SandpackFiles;
  filesTab?: boolean;
  template: Parameters<typeof SandpackProvider>[0]["template"];
}) {
  return (
    <div>
      <SandpackProvider
        className={"h-auto b-none"}
        template={template}
        theme={nightOwl}
        files={files}
        options={{
          activeFile: Object.keys(files)[0],
        }}
      >
        <SandpackLayout>
          <SandpackCodeEditor />
          <SandpackFileExplorer />
          {preview ? <SandpackPreview style={{ height: "100vh" }} /> : null}
          {transpile ? <SandpackTranspiledCode /> : null}
        </SandpackLayout>
      </SandpackProvider>
    </div>
  );
}
