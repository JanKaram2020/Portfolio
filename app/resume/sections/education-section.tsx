import React from "react";
import FullWidthColumn from "../components/FullWidthColumn";
import Section from "../components/Section";
import SectionHeading from "../components/SectionHeading";
import { AiTwotoneCalendar } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
import LineSeparator from "../components/LineSeparator";

const EducationSection = () => (
  <FullWidthColumn>
    <SectionHeading>Education</SectionHeading>
    <Section className="flex flex-col gap-0.5">
      <div>
        <h3 className={"text-lg print:text-base"}>
          BS, Computer Science and Statistics{" "}
        </h3>
        <div className={"text-sm flex flex-row gap-2"}>
          <div className={"flex flex-row items-center"}>
            <AiTwotoneCalendar className={"inline"} />
            &nbsp;2017 - 2022
          </div>
          <p className={"flex flex-row items-center"}>
            <MdLocationOn className={"inline"} />
            <span className={"text-sky-500"}>Alexandria University.</span>
          </p>
        </div>
      </div>
      <LineSeparator />
      <div>
        <h3 className={"text-lg print:text-base"}>
          Web development Specialization
        </h3>
        <div className={"text-sm flex flex-row gap-2"}>
          <div className={"flex flex-row items-center"}>
            <AiTwotoneCalendar className={"inline"} />
            &nbsp;2019 - 2021
          </div>
          <p className={"flex flex-row items-center"}>
            <MdLocationOn className={"inline"} />
            <span className={"text-sky-500"}>
              University of Michigan via Coursera.
            </span>
          </p>
        </div>
      </div>
    </Section>
  </FullWidthColumn>
);

export default EducationSection;
