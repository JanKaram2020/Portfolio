import React, { ReactNode, Suspense } from "react";

const SuspenseFactory = <T extends {}>(Component: (args: T) => ReactNode) => {
  return (props: T) => (
    <Suspense fallback={null}>
      <Component {...props} />
    </Suspense>
  );
};
export default SuspenseFactory;
