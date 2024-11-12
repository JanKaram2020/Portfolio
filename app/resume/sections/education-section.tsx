import React from "react";
import FullWidthColumn from "../components/FullWidthColumn";
import Section from "../components/Section";
import SectionHeading from "../components/SectionHeading";
import { AiTwotoneCalendar } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
import LineSeparator from "../components/LineSeparator";

const Education = [
  {
    name: "BS, Computer Science and Statistics",
    time: "2017 - 2022",
    place: "Alexandria University",
  },
  {
    name: "Web development Specialization",
    time: "2019 - 2021",
    place: "University of Michigan via Coursera",
  },
];

const EducationSection = () => (
  <FullWidthColumn>
    <SectionHeading>Education</SectionHeading>
    <Section className="flex flex-col gap-0.5">
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
    </Section>
  </FullWidthColumn>
);

export default EducationSection;
