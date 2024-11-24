"use client";
import React from "react";

const PrintSection = () => {
  return (
    <div className="flex items-center justify-center mt-[5vh] print:(m-0 hidden) gap-2">
      <a
        className="text-2xl hover:underline inline-flex appearance-none items-center justify-center relative whitespace-nowrap align-baseline outline-none outline-offset-2 w-auto leading-normal rounded-md font-bold transition-all duration-100 h-auto min-w-10 text-sky-500 text-center p-0"
        href={"/Resume_Jan_Ghaly.pdf"}
        download={"Resume_Jan_Ghaly.pdf"}
      >
        Download Resume
      </a>
    </div>
  );
};

export default PrintSection;
