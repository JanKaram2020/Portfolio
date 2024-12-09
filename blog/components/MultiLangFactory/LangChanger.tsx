import { mergeClasses } from "lib/mergeClasses";
import useSyncSelectedValue from "./useSyncSelectedValue";
import { Link } from "next-view-transitions";

const LangChanger =
  <T extends string>(displayValues: T[]) =>
  ({
    containerClass,
    buttonClass,
    labels,
    variant,
  }: {
    containerClass?: string;
    buttonClass?: string;
    labels?: string[];
    variant?: "space";
  }) => {
    const { value, getHref } = useSyncSelectedValue(displayValues);
    if (labels && labels.length !== displayValues.length) {
      throw new Error("labels must be the same length as displayValues");
    }
    return (
      <div className={mergeClasses(containerClass)}>
        {displayValues.map((l, i) => (
          <Link
            key={l}
            href={getHref(l)}
            aria-selected={value === l}
            className={mergeClasses("group", buttonClass)}
            scroll={false}
          >
            {labels?.[i] ?? l}
            {variant === "space" ? (
              <span className={"group-last:hidden"}>&nbsp;</span>
            ) : null}
          </Link>
        ))}
      </div>
    );
  };

export default LangChanger;
