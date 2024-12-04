import { ReactNode, useEffect, useState } from "react";
import { useMotionValue } from "framer-motion";

const useResponsive = () => {
  const width = useMotionValue<number>(1024);
  function handleWindowSizeChange() {
    width.set(window.innerWidth);
  }
  useEffect(() => {
    handleWindowSizeChange();

    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return {
    isMobile: width.get() <= 768 && width.get() > 0,
    isTablet: width.get() > 768 && width.get() < 1024,
    isDesktop: width.get() >= 1024,
  };
};

export default useResponsive;
