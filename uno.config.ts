/* eslint-disable import/no-extraneous-dependencies */
import { presetUno, defineConfig } from 'unocss';
import transformerVariantGroup from '@unocss/transformer-variant-group';
import transformerAttributifyJsx from '@unocss/transformer-attributify-jsx';

export default defineConfig({
  content: {
    filesystem: [
      './app/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './sections/**/*.{js,ts,jsx,tsx,mdx}',
    ],
  },
  presets: [
    presetUno({
      dark: 'class',
    }),
  ],// @ts-ignore
  transformers: [transformerVariantGroup(), transformerAttributifyJsx()],
});
