import { mergeClasses } from "lib/mergeClasses";
import useSyncSelectedValue from "./useSyncSelectedValue";

const LangChanger =
  <T extends string>(displayValues: T[]) =>
  ({
    containerClass,
    buttonClass,
    labels,
  }: {
    containerClass?: string;
    buttonClass?: string;
    labels?: string[];
  }) => {
    const { value, onValueChange } = useSyncSelectedValue(displayValues);
    if (labels && labels.length !== displayValues.length) {
      throw new Error("labels must be the same length as displayValues");
    }
    return (
      <div className={mergeClasses(containerClass)}>
        {displayValues.map((l, i) => (
          <button
            aria-selected={value === l}
            className={mergeClasses(buttonClass)}
            onClick={() => onValueChange(l)}
          >
            {labels?.[i] ?? l}
          </button>
        ))}
      </div>
    );
  };

export default LangChanger;
