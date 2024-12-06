"use client";
import { ReactNode } from "react";
import useResponsive from "hooks/useResponsive";

const DesktopOnlyComponent = ({ children }: { children: ReactNode }) => {
  const { lg } = useResponsive();

  if (lg) {
    return <>{children}</>;
  }
  return <></>;
};

export default DesktopOnlyComponent;
