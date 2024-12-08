"use client";
import { ReactNode } from "react";
import useResponsive from "hooks/useResponsive";

const DesktopOnlyComponent = ({ children }: { children: ReactNode }) => {
  const { lg, xl } = useResponsive();

  if (lg || xl) {
    return <>{children}</>;
  }
  return <></>;
};

export default DesktopOnlyComponent;
