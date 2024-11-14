import React from "react";
import FullWidthColumn from "../components/FullWidthColumn";
import SectionHeading from "../components/SectionHeading";
import { AiTwotoneCalendar } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
import LineSeparator from "../components/LineSeparator";
import { Education } from "../data";

const EducationSection = () => (
  <FullWidthColumn>
    <SectionHeading>Education</SectionHeading>
    <section className="flex flex-col gap-0.5">
      {Education.map(({ name, time, place }) => (
        <div className={"group"} key={name}>
          <h3 className={"text-lg print:text-base"}>{name}</h3>
          <div className={"text-sm flex flex-row flex-wrap gap-x-2"}>
            <div className={"flex flex-row items-center"}>
              <AiTwotoneCalendar className={"inline"} />
              &nbsp;{time}
            </div>
            <p className={"flex flex-row items-center"}>
              <MdLocationOn className={"inline"} />
              <span className={"text-sky-500"}>{place}</span>
            </p>
          </div>
          <LineSeparator />
        </div>
      ))}
    </section>
  </FullWidthColumn>
);

export default EducationSection;
