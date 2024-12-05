// @ts-ignore
import * as parserTypeScript from "prettier/parser-typescript";
import * as prettier from "prettier/standalone";
import * as prettierPluginEstree from "prettier/plugins/estree";

const formatCode = async (code: string) => {
  return await prettier.format(code, {
    parser: "typescript",
    plugins: [parserTypeScript, prettierPluginEstree],
  });
};
export default formatCode;
