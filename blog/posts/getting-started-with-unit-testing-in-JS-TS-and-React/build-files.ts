import { languages } from "./LangComponents";

function recursivelyTrim<T>(input: T): T {
  if (input === null || input === undefined) return input;

  if (typeof input === "string") {
    return input.trim() as T; // Trim strings directly
  }

  if (Array.isArray(input)) {
    return input.map((item) => recursivelyTrim(item)) as unknown as T;
  }

  if (typeof input === "object") {
    return Object.entries(input).reduce((acc, [key, value]) => {
      (acc as Record<string, any>)[key] = recursivelyTrim(value);
      return acc;
    }, {} as T);
  }

  return input;
}

export const buildFiles: {
  [K in (typeof languages)[number]]: Record<string, string>;
} = recursivelyTrim({
  JS: {
    "add.test.js": `
import { add } from "./add";

test("add()", () => {
 expect(add(1, 2)).toBe(3);
});
`,
    "add.js": `export const add = (a, b) => a + b;`,
    "vitest.config.js": `
      import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
  },
})
      `,
  },
  TS: {
    "add.test.ts": `
import { add } from "./add";

test("add()", () => {
 expect(add(1, 2)).toBe(3);
});
`,
    "add.ts": `export const add = (a: number, b: number) => a + b;`,
    "vitest.config.ts": `import { defineConfig } from "vitest/config";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tsconfigPaths()],
});`,
  },
  React: {
    "add.test.ts": `
import { add } from "./add";

test("add()", () => {
 expect(add(1, 2)).toBe(3);
});
`,
    "add.ts": `export const add = (a: number, b: number) => a + b;`,
    "vitest.config.ts": `import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    environment: "jsdom",
    setupFiles: ["./tests/setupTests.ts"],
    globals: true
  },
});`,
    "tests/setupTests.ts": `import "@testing-library/jest-dom/vitest";
import { afterEach } from "vitest";
import { cleanup } from "@testing-library/react";

afterEach(() => {
  cleanup();
});`,
  },
});
