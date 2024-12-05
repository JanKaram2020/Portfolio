import { languages } from "./LangComponents";

export const buildFiles: {
  [K in (typeof languages)[number]]: Record<string, string>;
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
