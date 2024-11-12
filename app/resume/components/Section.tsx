import React, { ReactNode } from "react";

const Section = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => <div className={`${className}`}>{children}</div>;

export default Section;
