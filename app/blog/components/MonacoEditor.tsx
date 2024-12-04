import Editor, { Monaco } from "@monaco-editor/react";
import {
  useActiveCode,
  SandpackStack,
  FileTabs,
  useSandpack,
} from "@codesandbox/sandpack-react";
import { useDarkMode } from "../../../hooks/useDarkMode";
import NightOwl from "./night-owl.json";
import { jsxlib } from "../utils/jsx-lib";

const mapper = {
  ts: "typescript",
  tsx: "typescript",
  jsx: "javascript",
  html: "html",
};
export default function MonacoEditor({ filesTab }: { filesTab: boolean }) {
  const { code, updateCode, readOnly } = useActiveCode();
  const { sandpack } = useSandpack();
  const isDark = useDarkMode();

  async function loadDtsFiles() {
    const dtsFiles = await (await fetch("/@types/libs.json")).json();
    return Promise.all(
      dtsFiles.map(async (filePath: string) => {
        const content = await (await fetch(`/@types/${filePath}`)).text();
        const lib =
          filePath.split("/")[0][0].toUpperCase() +
          filePath.split("/")[0].substring(1);
        return {
          filePath,
          content: `
          declare module ${lib} { ${content} }
          declare module ${filePath.split("/")[0]} { ${content} }
          `.trim(),
        };
      }),
    );
  }

  async function setExtraLibs(monaco: Monaco) {
    const extraLibs = await loadDtsFiles();
    const finalExtra = extraLibs.map((extraLib) => {
      return {
        ...extraLib,
        filePath: monaco.Uri.file(`/@types/${extraLib.filePath}`),
      };
    });
    console.log({
      finalExtra,
    });
    await monaco.languages.typescript.typescriptDefaults.setExtraLibs(
      finalExtra,
    );
  }
  async function setEditorTheme(monaco: Monaco) {
    monaco.editor.defineTheme("night-owl", NightOwl);
    await monaco.languages.typescript.typescriptDefaults.setExtraLibs([
      {
        content: jsxlib(),
        filePath: `ts:filename/jsx.d.ts`,
      },
    ]);
    await setExtraLibs(monaco);
    monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
      moduleResolution: monaco.languages.typescript.ModuleResolutionKind.NodeJs,
      allowNonTsExtensions: true,
      typeRoots: ["node_modules/@types"],
      jsx: monaco.languages.typescript.JsxEmit.ReactNative,
      target: monaco.languages.typescript.ScriptTarget.ESNext,
    });
  }
  const fileSplit = sandpack.activeFile.split(".");
  const extension = fileSplit[fileSplit.length - 1];
  const lang = mapper[extension as keyof typeof mapper] ?? extension;

  return (
    <SandpackStack className={"m-0"}>
      {filesTab ? <FileTabs /> : null}
      <Editor
        className={"h-auto"}
        options={{
          fontSize: 18,
          readOnly,
          minimap: { enabled: false },
          fixedOverflowWidgets: true,
          overviewRulerLanes: 0,
          scrollBeyondLastLine: false,
          renderLineHighlightOnlyWhenFocus: true,
          scrollbar: {
            vertical: "hidden",
            horizontal: "hidden",
            handleMouseWheel: true,
          },
        }}
        defaultLanguage={lang}
        theme={isDark ? "night-owl" : "catppuccin-latte"}
        beforeMount={setEditorTheme}
        key={sandpack.activeFile}
        defaultValue={code}
        onChange={(value) => updateCode(value || "")}
      />
    </SandpackStack>
  );
}
