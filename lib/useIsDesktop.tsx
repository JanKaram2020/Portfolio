import { useEffect, useState } from "react";

const useIsDesktop = () => {
  const [width, setWidth] = useState<number>(1024);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    handleWindowSizeChange();

    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return width >= 1024;
};

export default useIsDesktop;
