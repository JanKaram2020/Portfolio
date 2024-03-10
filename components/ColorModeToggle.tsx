"use client";

import { RiMoonClearFill } from "react-icons/ri";
import { IoMdSunny } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";
import { useDarkMode, toggleMode } from "lib/useDarkMode";

function ColorModeToggle() {
  const isDark = useDarkMode();

  return (
    <motion.button
      aria-label={isDark ? `Activate Light mode` : `Activate Dark mode`}
      title={isDark ? `Activate Light mode` : `Activate Dark mode`}
      className="grid justify-center content-center w-fit active:scale-80"
      onClick={() => {
        toggleMode();
      }}
    >
      {isDark ? (
        <AnimatePresence>
          <motion.div
            key="sunny"
            className="text-yellow-500"
            style={{
              gridArea: "1 / 1 / 2 / 2",
            }}
            color="yellow.500"
            initial={{ rotate: 90, y: 30, opacity: 0 }}
            animate={{ rotate: 0, y: 0, opacity: 1 }}
            exit={{ rotate: 90, y: 30, opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <IoMdSunny size={30} />
          </motion.div>
        </AnimatePresence>
      ) : (
        <AnimatePresence>
          <motion.div
            key="moon"
            className="text-black"
            style={{
              gridArea: "1 / 1 / 2 / 2",
            }}
            color="black"
            initial={{ rotate: 90, y: 30, opacity: 0 }}
            animate={{ rotate: 0, y: 0, opacity: 1 }}
            exit={{ rotate: 90, y: 30, opacity: 0, color: "white" }} // Arshy's touch
            transition={{ duration: 1 }}
          >
            <RiMoonClearFill size={30} />
          </motion.div>
        </AnimatePresence>
      )}
    </motion.button>
  );
}
export default ColorModeToggle;
