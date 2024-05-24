import { twMerge } from "tailwind-merge";
import clsx, { ClassValue } from "clsx";

export const mergeClasses = (...classes: ClassValue[]) =>
  twMerge(clsx(...classes));
