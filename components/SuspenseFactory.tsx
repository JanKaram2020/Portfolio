import React, { ReactNode, Suspense } from "react";

const SuspenseFactory = <T extends {}>(
  Component: (args: T) => ReactNode,
  fallback?: boolean | ReactNode,
) => {
  return (props: T) => (
    <Suspense
      fallback={
        typeof fallback === "boolean" && fallback && "children" in props
          ? (props.children as ReactNode)
          : fallback
      }
    >
      <Component {...props} />
    </Suspense>
  );
};
export default SuspenseFactory;
