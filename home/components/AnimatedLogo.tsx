"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import useLogoPosition from "hooks/useLogoPosition";
import { useResponsiveValue } from "hooks/useResponsive";

const AnimatedLogo = () => {
  const { scrollY } = useScroll();
  const dimensions = useLogoPosition();
  const layoutValues = useResponsiveValue({
    sm: { width: "80%", left: "10%" },
    xl: { width: "60%", left: "20%" },
  });
  const width = useTransform(
    scrollY,
    [0, 800],
    [layoutValues.width, dimensions.width],
  );
  const top = useTransform(scrollY, [0, 800], [400, 20]);
  const left = useTransform(
    scrollY,
    [0, 800],
    [layoutValues.left, dimensions.left],
  );

  return (
    <motion.div style={{ width, top, left }} className={"fixed z-10"}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 790.7 241.5"
        fill="none"
        strokeMiterlimit="10"
        strokeWidth="5"
        className="stroke-gray-800 dark:stroke-gray-200"
      >
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 0.8, duration: 3.5 }}
          d="M.9 2.5c69.9 27.8 151.8 13.3 225 0-48 8.8 51 204.7-59.6 225.6C127 235.5-3.1 198.4 27 145.8c41.4-72.3 178.5 15.2 228.8-5.3 64.9-26.4-16.8-63.3-21-9.3-4.1 52.7 40.7 13.1 45-5.1-13.7 57.6 46.6-2.1 39.3-19.4-2.6 16.2-7.3 45.2 1 50.2 1.2.7 2.8.2 3.5-1 .1-.1.1-.2.2-.3 6.2-15.7 23.1-45.9 36.9-56.6 1-.8 2.5-.6 3.3.4.2.3.4.7.5 1.1 19.5 145.3 81.5-13.7 83.4-98 0 0 2 197-31 231 0 0 33-152 131-199 0 0-106 84-95 139 0 19 90-40.6 90-58 0-20-60.6-20-45 29.1 1.7 5.6 5.9 10.2 11.3 12.4 13.6 5.8 38.9 8.6 33.7-52.5 0 0 7.1 55 18.1 56s24.9-54 18.9-60-16 19-13 23 42-4 46-14-13 49-4 50 71-44 71-44-19-32-42 0c0 0-21.4 34.1 21.2 42.3 9 1.7 17.8-4.2 19.5-13.2.1-.7.2-1.5.3-2.2l2.1-38.8s2 55 8 56 27-53 27-53 6 38 2 53 17-66 25-57 9 56 4 57 20-59 25-57 17 56 12 57"
        />
      </svg>
    </motion.div>
  );
};

export default AnimatedLogo;
