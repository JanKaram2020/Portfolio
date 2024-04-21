"use client";
import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { GA_TRACKING_ID } from "../lib/constants";

export function Analytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const pageView = (url: string) => {
    // @ts-ignore
    if (window && window.gtag) {
      // @ts-ignore
      window.gtag("config", GA_TRACKING_ID, {
        page_path: url,
      });
    }
  };

  useEffect(() => {
    const url = `${pathname}?${searchParams}`;
    const handleRouteChange = (url: string) => {
      pageView(url);
    };
    handleRouteChange(url);
  }, [pathname, searchParams]);

  return null;
}
