import { mergeClasses } from "lib/mergeClasses";
import useSyncSelectedValue from "./useSyncSelectedValue";
import { Link } from "next-view-transitions";
import { Suspense, type ComponentPropsWithRef, type ElementType } from "react";

type DistributiveOmit<T, TOmitted extends PropertyKey> = T extends any
  ? Omit<T, TOmitted>
  : never;

const AsComponent = <TAs extends ElementType>(
  props: {
    as?: TAs;
  } & DistributiveOmit<
    ComponentPropsWithRef<ElementType extends TAs ? "div" : TAs>,
    "as"
  >,
) => {
  const { as: Comp = "div", ...rest } = props;
  return <Comp {...rest}></Comp>;
};

type Props = {
  displayValues: string[];
  slug: string;
  containerClass?: string;
  buttonClass?: string;
  labels?: string[];
  variant?: "space";
  as?: ElementType;
};

const ServerLangChanger = ({
  containerClass,
  buttonClass,
  labels,
  variant,
  displayValues,
  slug,
  as,
}: Props) => {
  return (
    <AsComponent as={as} className={mergeClasses("group", containerClass)}>
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
    </AsComponent>
  );
};

const ClientLangChanger = ({
  containerClass,
  buttonClass,
  labels,
  variant,
  displayValues,
  slug,
  as,
}: Props) => {
  const { value } = useSyncSelectedValue(displayValues);
  return (
    <AsComponent as={as} className={mergeClasses("group", containerClass)}>
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
    </AsComponent>
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
