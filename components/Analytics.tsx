"use client";
import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { GA_TRACKING_ID } from "../lib/constants";
import SuspenseFactory from "./SuspenseFactory";

const Analytics = SuspenseFactory(() => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const handleRouteChange = () => {
      if (window && "gtag" in window && typeof window.gtag === "function") {
        const paramsString = searchParams.toString();
        const page_path =
          paramsString.length > 0 ? `${pathname}?${paramsString}` : pathname;
        window.gtag("config", GA_TRACKING_ID, {
          page_path,
        });
      }
    };

    handleRouteChange();
  }, [pathname, searchParams]);

  return null;
});

export default Analytics;
