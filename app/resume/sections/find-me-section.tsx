import React from "react";
import SectionHeading from "../components/SectionHeading";
import LineSeparator from "../components/LineSeparator";
import { FindMe } from "../data";

const FindMeSection = () => {
  return (
    <section>
      <SectionHeading>Find Me Online</SectionHeading>
      <div>
        {FindMe.map((i) => (
          <div className="flex flex-col group" key={i.name}>
            <div className={"flex flex-row gap-1 items-center"}>
              <i.icon className={"text-sky-500"} />
              <p>{i.name}</p>
            </div>
            <a href={i.href} className={"text-sm underline"} target={"_blank"}>
              {i.href.split("//")[1]}
            </a>
            <LineSeparator />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FindMeSection;
