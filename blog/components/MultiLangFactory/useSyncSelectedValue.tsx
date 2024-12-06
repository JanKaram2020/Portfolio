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

  return {
    value,
    onValueChange,
    defaultValue: values[0],
  };
};

const validateValue = <T extends string>(v: string | null, values: T[]) => {
  const elementIndex = values.indexOf(v as T);
  if (v && elementIndex > -1) {
    return values[elementIndex];
  }
  return values[0];
};

export default useSyncSelectedValue;
