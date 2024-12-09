import React, { ReactNode, Suspense } from "react";

const SuspenseFactory = <T extends {}>(
  Component: (args: T) => ReactNode,
  fallbackChildren?: boolean,
) => {
  return (props: T) => (
    <Suspense
      fallback={
        fallbackChildren && "children" in props
          ? (props.children as ReactNode)
          : null
      }
    >
      <Component {...props} />
    </Suspense>
  );
};
export default SuspenseFactory;
