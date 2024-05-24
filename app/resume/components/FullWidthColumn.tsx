import type { ReactNode } from "react";

const FullWidthColumn = ({ children }: { children: ReactNode }) => (
  <div className="grid grid-cols-1 w-full">{children}</div>
);
export default FullWidthColumn;
