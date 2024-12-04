import fs from "fs";
import path from "path";
const dir = path.join(
  process.cwd(),
  "app",
  "blog",
  "posts",
  "typescript-utilities",
);
export const getFileCode = (fileName: string) =>
  fs.readFileSync(dir + "/" + fileName, "utf-8");
