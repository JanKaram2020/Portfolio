import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ReactNode } from "react";

const useSyncSelectedValue = (props?: {
  blocks?: Array<{ language: string; content: ReactNode }>;
  defaultValue?: string;
}) => {
  const blocks = props?.blocks;
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const selectedParam = searchParams.get("selected");
  const defaultValue = props?.defaultValue ?? blocks?.[0].language;

  const value = `${
    selectedParam && blocks && blocks.find((b) => b.language === selectedParam)
      ? selectedParam
      : blocks
        ? defaultValue
        : selectedParam
  }`;

  const onValueChange = (v: string) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("selected", v);
    router.replace(`${pathname}?${newParams}`, {
      scroll: false,
    });
  };

  return {
    value,
    onValueChange,
    defaultValue,
  };
};
export default useSyncSelectedValue;
