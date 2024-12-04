import { useEffect, useState } from "react";

const useLogoPosition = (navigation = false) => {
  const [dimensions, setDimensions] = useState<{
    width: string;
    left: string;
    right: string;
  }>({
    width: "80%",
    left: "10%",
    right: "10%",
  });

  useEffect(() => {
    function handleWindowSizeChange() {
      const originalLink = document.getElementById("original-link");
      if (originalLink) {
        const { left, right, width } = originalLink.getBoundingClientRect();
        setDimensions({
          width: `${(width / window.innerWidth) * 100}%`,
          left: navigation
            ? `${1 + (right / window.innerWidth) * 100}%`
            : `${(left / window.innerWidth) * 100}%`,
          right: `${(left / window.innerWidth) * 100}%`,
        });
      }
    }
    handleWindowSizeChange();
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return dimensions;
};

export default useLogoPosition;
