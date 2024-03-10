"use client";
import React from "react";

const PrintButton = () => {
  return (
    <button
      className="text-2xl hover:underline inline-flex appearance-none items-center justify-center relative whitespace-nowrap align-baseline outline-none outline-offset-2 w-auto leading-normal rounded-md font-bold transition-all duration-100 h-auto min-w-10 text-blue-300 text-center p-0"
      onClick={() => window.print()}
    >
      Download Resume
    </button>
  );
};

export default PrintButton;
