import { usePathname, useRouter, useSearchParams } from "next/navigation";

const useSyncSelectedValue = <T extends string>(values: Array<T>) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const value = validateValue(searchParams.get("selected"), values);

  const onValueChange = (v: T) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("selected", v);
    router.replace(`${pathname}?${newParams}`, {
      scroll: false,
    });
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
