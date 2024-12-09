/* eslint-disable import/no-extraneous-dependencies */
import { presetUno, defineConfig } from "unocss";
import transformerVariantGroup from "@unocss/transformer-variant-group";

export default defineConfig({
  content: {
    filesystem: [
      "./blog/**/*.{js,ts,jsx,tsx,mdx}",
      "./home/**/*.{js,ts,jsx,tsx,mdx}",
      "./project/**/*.{js,ts,jsx,tsx,mdx}",
      "./resume/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    ],
  },
  presets: [
    presetUno({
      dark: "class",
    }),
  ], // @ts-ignore
  transformers: [transformerVariantGroup()],
  extendTheme: (theme) => {
    // @ts-ignore
    theme.colors.sky[500] = `#008CFF`;
  },
});
