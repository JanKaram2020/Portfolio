import { useDarkMode } from "hooks/useDarkMode";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export type MermaidProps = {
  readonly chart: string;
} & {
  isDark: ReturnType<typeof useDarkMode>;
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
