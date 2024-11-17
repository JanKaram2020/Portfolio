import fs from "fs";
import path from "path";

export default function getMdxFilesRecursively(directory: string): string[] {
  return fs.readdirSync(directory).flatMap((file) => {
    const fullPath = path.join(directory, file);
    if (fs.statSync(fullPath).isDirectory()) {
      return getMdxFilesRecursively(fullPath);
    }
    return path.extname(fullPath) === ".mdx" ? fullPath : [];
  });
}
