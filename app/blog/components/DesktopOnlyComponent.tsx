"use client";
import { ReactNode } from "react";
import useIsDesktop from "lib/useIsDesktop";

const DesktopOnlyComponent = ({ children }: { children: ReactNode }) => {
  const isDesktop = useIsDesktop();

  if (isDesktop) {
    return <>{children}</>;
  }
  return <></>;
};

export default DesktopOnlyComponent;
