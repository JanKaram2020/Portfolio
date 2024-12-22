import { usePathname, useSearchParams } from "next/navigation";
import { useTransitionRouter } from "next-view-transitions";

const useSyncSelectedValue = <T extends string>(
  values: Array<T>,
  initialValue?: T,
) => {
  const router = useTransitionRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const value = validateValue(
    searchParams.get("selected"),
    values,
    initialValue,
  );

  const onValueChange = (v: T) => {
    try {
      const newParams = new URLSearchParams(searchParams);
      newParams.set("selected", v);

      router.replace(`${pathname}?${newParams}`, {
        scroll: false,
      });
    } catch (e) {
      alert(`Error happened while switching to ${v}.`);
    }
  };

  const getHref = (s: T) => `${pathname}?selected=${s}`;

  return {
    value,
    onValueChange,
    defaultValue: values[0],
    getHref,
  };
};

const validateValue = <T extends string>(
  v: string | null,
  values: T[],
  initialValue?: T,
) => {
  const defaultValue = initialValue ?? values[0];
  if (!v) return defaultValue;
  const elementIndex = values.indexOf(v as T);
  if (elementIndex > -1) {
    return values[elementIndex];
  }
  return defaultValue;
};

export default useSyncSelectedValue;
