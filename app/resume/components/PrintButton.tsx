"use client";
import React from "react";

const PrintButton = () => {
  return (
    <div className="flex items-center justify-center mt-[5vh] print:(m-0 hidden) gap-2">
      <span className="text-2xl">Download Resume as</span>
      <button
        className="text-2xl hover:underline inline-flex appearance-none items-center justify-center relative whitespace-nowrap align-baseline outline-none outline-offset-2 w-auto leading-normal rounded-md font-bold transition-all duration-100 h-auto min-w-10 text-sky-500 text-center p-0"
        onClick={() => window.print()}
      >
        PDF
      </button>
    </div>
  );
};

export default PrintButton;
