"use client";
import React, { ReactNode, useEffect, useId } from "react";
import { CodeGround } from "../posts/typescript-utilities/CodeGround";

const Code = ({
  children,
  formatted,
}: {
  children: ReactNode;
  formatted: string;
}) => {
  const [isClient, setIsClient] = React.useState(false);
  const id = useId();
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (isClient) {
    return <CodeGround code={formatted} fileName={`fileName${id}.tsx`} />;
  }
  return children;
};

export default Code;
