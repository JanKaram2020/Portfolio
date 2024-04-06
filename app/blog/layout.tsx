import React, { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return <div className={"max-w-[100ch] leading-relaxed"}>{children}</div>;
};

export default Layout;
