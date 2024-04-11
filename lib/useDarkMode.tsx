"use client";

import { useSyncExternalStore } from "react";
import Cookies from "js-cookie";

function subscribe(callback: () => void) {
  const mutationObserver = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.attributeName === "class") {
        callback();
      }
    });
  });

  mutationObserver.observe(document.body, { attributes: true });
  return () => {
    mutationObserver.disconnect();
  };
}
function getSnapshot() {
  return document.body.classList.contains("dark");
}
export const toggleMode = (v?: "light" | "dark") => {
  const isDark = document.body.classList.contains("dark");

  if (v === "light" && isDark) {
    document.body.classList.remove("dark");
    Cookies.set("theme", "light");
    return;
  }
  if (v === "dark" && !isDark) {
    document.body.classList.add("dark");
    Cookies.set("theme", "dark");
    return;
  }

  document.body.classList.toggle("dark");
  const newTheme = isDark ? "light" : "dark";
  Cookies.set("theme", newTheme);
};
export const useDarkMode = () => {
  return useSyncExternalStore(subscribe, getSnapshot, () => true);
};
