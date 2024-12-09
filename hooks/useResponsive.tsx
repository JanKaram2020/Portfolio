import { useEffect, useState } from "react";

const useResponsive = () => {
  const [widthValue, setWidthValue] = useState<number>(1024);

  useEffect(() => {
    const handleWindowSizeChange = () => {
      setWidthValue(window.innerWidth);
    };
    handleWindowSizeChange();
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return {
    sm: widthValue <= 768,
    md: widthValue > 768 && widthValue < 1024,
    lg: widthValue >= 1024 && widthValue < 1440,
    xl: widthValue >= 1440,
  };
};
type RequireOneOrAll<T extends Object> =
  | {
      [K in keyof T]: Required<Pick<T, K>> & Partial<Omit<T, K>>;
    }[keyof T]
  | T;

export const useResponsiveValue = <
  T extends
    | number
    | string
    | string[]
    | number[]
    | Record<string, number | `${number}%`>,
>(
  values: [T, T, T, T] | ({ sm: T } & RequireOneOrAll<{ md: T; lg: T; xl: T }>),
) => {
  const { sm, md, lg } = useResponsive();

  if (Array.isArray(values)) {
    if (sm) return values[0];
    if (md) return values[1] ?? values[0];
    if (lg) return values[2] ?? values[0];
    return values[3] ?? values[0];
  }

  if (sm) return values.sm;
  if (md) return values.md ?? values.sm;
  if (lg) return values.lg ?? values.sm;
  return values.xl ?? values.sm;
};

export default useResponsive;
