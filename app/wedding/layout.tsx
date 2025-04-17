import { ReactNode } from "react";

import "./css/animate.css";
import "./css/bootstrap.min.css";
import "./css/default.css";
import "./css/style.css";
import "./css/timeline.css";
import "./css/lang.css";
import "react-medium-image-zoom/dist/styles.css";

const Layout = ({ children }: { children: ReactNode }) => {
  return <>{children}</>;
};

export default Layout;
