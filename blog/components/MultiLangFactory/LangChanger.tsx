import { mergeClasses } from "lib/mergeClasses";
import useSyncSelectedValue from "./useSyncSelectedValue";
import { Link } from "next-view-transitions";
import { Suspense } from "react";

type Props = {
  displayValues: string[];
  slug: string;
  containerClass?: string;
  buttonClass?: string;
  labels?: string[];
  variant?: "space";
};

const ServerLangChanger = ({
  containerClass,
  buttonClass,
  labels,
  variant,
  displayValues,
  slug,
}: Props) => {
  return (
    <div className={mergeClasses("group", containerClass)}>
      {displayValues.map((l, i) => (
        <Link
          key={l}
          href={`/blog/${slug}?selected=${l}`}
          className={mergeClasses("group", buttonClass)}
          scroll={false}
        >
          {labels?.[i] ?? l}
          {variant === "space" ? <span>&nbsp;</span> : null}
        </Link>
      ))}
    </div>
  );
};

const ClientLangChanger = ({
  containerClass,
  buttonClass,
  labels,
  variant,
  displayValues,
  slug,
}: Props) => {
  const { value } = useSyncSelectedValue(displayValues);
  return (
    <div className={mergeClasses("group", containerClass)}>
      {displayValues.map((l, i) => (
        <Link
          key={l}
          href={`/blog/${slug}?selected=${l}`}
          aria-selected={value === l}
          className={mergeClasses("group", buttonClass)}
          scroll={false}
        >
          {labels?.[i] ?? l}
          {variant === "space" ? <span>&nbsp;</span> : null}
        </Link>
      ))}
    </div>
  );
};

const LangChanger =
  <T extends string>(slug: string, displayValues: T[]) =>
  (props: Omit<Props, "slug" | "displayValues">) => {
    if (props.labels && props.labels.length !== displayValues.length) {
      throw new Error("labels must be the same length as displayValues");
    }
    const componentProps = { ...props, slug, displayValues };
    return (
      <Suspense fallback={<ServerLangChanger {...componentProps} />}>
        <ClientLangChanger {...componentProps} />
      </Suspense>
    );
  };

export default LangChanger;
