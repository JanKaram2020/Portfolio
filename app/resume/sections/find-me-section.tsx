import React from "react";
import SectionHeading from "../components/SectionHeading";
import { PiBookOpenTextDuotone } from "react-icons/pi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import LineSeparator from "../components/LineSeparator";

const FindMeSection = () => {
  return (
    <section>
      <SectionHeading>Find Me Online</SectionHeading>
      <div>
        {[
          {
            name: "Blog",
            link: "https://www.jankaram.com/blog",
            icon: PiBookOpenTextDuotone,
          },
          {
            name: "Linkedin",
            link: "https://www.linkedin.com/in/jankaram2020/",
            icon: FaLinkedinIn,
          },
          {
            name: "GitHub",
            link: "https://github.com/jankaram2020/",
            icon: FaGithub,
          },
        ].map((i) => (
          <div className="flex flex-col group" key={i.name}>
            <div className={"flex flex-row gap-1 items-center"}>
              <i.icon className={"text-sky-500"} />
              <p>{i.name}</p>
            </div>
            <a href={i.link} className={"text-sm underline"} target={"_blank"}>
              {i.link.split("//")[1]}
            </a>
            <LineSeparator />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FindMeSection;
