import { useEffect, useState } from "react";

const useResponsive = () => {
  const [widthValue, setWidthValue] = useState<number>(1024);

  useEffect(() => {
    const handleWindowSizeChange = () => {
      setWidthValue(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return {
    isMobile: widthValue <= 768,
    isTablet: widthValue > 768 && widthValue < 1024,
    isDesktop: widthValue >= 1024 && widthValue < 1440,
    is4K: widthValue >= 1440,
  };
};

export const useResponsiveValue = <
  T extends
    | number
    | string
    | string[]
    | number[]
    | Record<string, number | `${number}%`>,
>(
  values:
    | [T, T, T, T]
    | ({ mobile: T } & (
        | { tablet: T; desktop: T; "4k": T }
        | { tablet: T; desktop?: T; "4k"?: T }
        | { tablet?: T; desktop: T; "4k"?: T }
        | { tablet?: T; desktop?: T; "4k": T }
      )),
) => {
  const { isMobile, isTablet, isDesktop } = useResponsive();

  if (Array.isArray(values)) {
    if (isMobile) return values[0];
    if (isTablet) return values[1];
    if (isDesktop) return values[2];
    return values[3];
  }

  if (isMobile) return values.mobile;
  if (isTablet) return values.tablet ?? values.mobile;
  if (isDesktop) return values.desktop ?? values.mobile;
  return values["4k"] ?? values.mobile;
};

export default useResponsive;
