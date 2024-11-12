"use client";
import React from "react";
// import { resumeId } from "../../../lib/constants";
// import htmlDocx from "html-docx";

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
      {/*|*/}
      {/*<button*/}
      {/*  className="text-2xl hover:underline inline-flex appearance-none items-center justify-center relative whitespace-nowrap align-baseline outline-none outline-offset-2 w-auto leading-normal rounded-md font-bold transition-all duration-100 h-auto min-w-10 text-sky-500 text-center p-0"*/}
      {/*  onClick={() => {*/}
      {/*    Export2Word(resumeId, "Resume_Jan_Ghaly");*/}
      {/*    // const elHtml = document.getElementById(resumeId)?.innerText;*/}
      {/*    // if (elHtml) {*/}
      {/*    //   const link = document.createElement("a");*/}
      {/*    //   link.setAttribute("download", "Resume_Jan_Ghaly.docx");*/}
      {/*    //   link.setAttribute(*/}
      {/*    //     "href",*/}
      {/*    //     "data:" +*/}
      {/*    //       "text/docx" +*/}
      {/*    //       ";charset=utf-8," +*/}
      {/*    //       `www.jankaram.com +201277440641 ` +*/}
      {/*    //       elHtml,*/}
      {/*    //   );*/}
      {/*    //   link.click();*/}
      {/*    // }*/}
      {/*  }}*/}
      {/*>*/}
      {/*  Word*/}
      {/*</button>*/}
    </div>
  );
};

export default PrintButton;
