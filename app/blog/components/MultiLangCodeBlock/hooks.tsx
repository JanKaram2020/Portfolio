import { ReactNode } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export const useSyncSelectedValue = ({
  blocks,
}: {
  blocks: Array<{ language: string; content: ReactNode }>;
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const selectedParam = searchParams.get("selected");
  const defaultValue = blocks[0].language;

  const value =
    selectedParam && blocks.find((b) => b.language === selectedParam)
      ? selectedParam
      : defaultValue;

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
