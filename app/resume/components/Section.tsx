import React, { ReactNode } from "react";

const Section = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => <section className={`${className}`}>{children}</section>;

export default Section;
