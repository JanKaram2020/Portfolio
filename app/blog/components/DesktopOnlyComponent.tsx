"use client";
import { ReactNode } from "react";
import useResponsive from "hooks/useResponsive";

const DesktopOnlyComponent = ({ children }: { children: ReactNode }) => {
  const { isDesktop } = useResponsive();

  if (isDesktop) {
    return <>{children}</>;
  }
  return <></>;
};

export default DesktopOnlyComponent;
