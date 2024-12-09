import { usePathname, useSearchParams } from "next/navigation";
import { useTransitionRouter } from "next-view-transitions";

const useSyncSelectedValue = <T extends string>(values: Array<T>) => {
  const router = useTransitionRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const value = validateValue(searchParams.get("selected"), values);

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

const validateValue = <T extends string>(v: string | null, values: T[]) => {
  if (!v) return values[0];
  const elementIndex = values.indexOf(v as T);
  if (elementIndex > -1) {
    return values[elementIndex];
  }
  return values[0];
};

export default useSyncSelectedValue;
