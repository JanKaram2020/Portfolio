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
  if (v === "light") {
    document.body.classList.remove("dark");
    Cookies.set("theme", "light");
    return;
  }
  if (v === "dark") {
    document.body.classList.add("dark");
    Cookies.set("theme", "dark");
    return;
  }
  document.body.classList.toggle("dark");
  const nextCookie = Cookies.get("theme") === "light" ? "dark" : "light";
  Cookies.set("theme", nextCookie);
};
export const useDarkMode = () => {
  return useSyncExternalStore(subscribe, getSnapshot, () => false);
};
