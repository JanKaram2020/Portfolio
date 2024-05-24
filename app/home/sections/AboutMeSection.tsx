import React from "react";
import FadeInWhenVisible from "app/home/components/FadeInWhenVisible";

export default function AboutMeSection(): React.ReactElement {
  return (
    <div
      className={
        "grid grid-cols-1 lg:grid-cols-3 content-center items-center my-[6vw]"
      }
      id="aboutMe"
    >
      <p className={"min-w-[320px] max-w-[60ch] ml-2 mr-4 text-xl"}>
        I'm a passionate introvert who loves building web apps and sites. <br />
        My first experience with web development was when I was 12, but it
        didn't last long: <br />I was always fascinated by websites and wanted
        to make my own so I searched the internet on how to make websites and
        found&nbsp;
        <a
          className={"text-red-400"}
          href="https://www.ahlamontada.com/"
          rel="noopener"
        >
          ahlamontada.com
        </a>
        &nbsp;then I made my first website after this I forgot about it.
        <br /> Years later I searched about the website and found it at&nbsp;
        <a
          className={"text-red-400"}
          href="https://jan12.rigala.net/"
          rel="noopener"
        >
          https://jan12.rigala.net/
        </a>
        &nbsp; (if you're a recruiter please don't visit it :D )
      </p>
      <div className="hidden lg:flex min-w-[320px] items-center justify-center">
        <FadeInWhenVisible />
      </div>
      <p
        className={"min-w-[320px] max-w-[60ch] ml-2 mr-4 text-xl mt-6 lg:mt-0"}
      >
        then I took a web development course at my college in my second year and
        fell in love with it over again. since then, I’ve been honing my skills
        and learning Javascript and front-end development. I recently took web
        development specialization from the University of Michigan and took the
        open-source track at ITI summer internship.
        <br />
        I’m seeking a full-time role where I can help a company achieve its
        goals.
      </p>
    </div>
  );
}
