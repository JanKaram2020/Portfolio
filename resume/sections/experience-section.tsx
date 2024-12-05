import FullWidthColumn from "resume/components/FullWidthColumn";
import SectionHeading from "../components/SectionHeading";
import { AiTwotoneCalendar } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
import LineSeparator from "../components/LineSeparator";
import ListItem from "../components/ListItem";
import { Experiences } from "../data";
import { JobsArray } from "../types";

const Job = ({ title, company, time, points, location }: JobsArray[number]) => {
  return (
    <div className={"flex flex-col gap-0.2 group"}>
      <h4 className={`text-lg print:text-base capitalize`}>{title}</h4>
      <h5 className="text-sm leading-none font-bold text-sky-500">{company}</h5>
      <p className="text-sm print:inline-flex flex flex-wrap items-center gap-x-2">
        <span className={"flex items-center"}>
          <AiTwotoneCalendar className={"inline"} />
          &nbsp;{time}
        </span>
        <span className={"flex items-center"}>
          <MdLocationOn className={"inline"} />
          &nbsp;{location}
        </span>
      </p>
      {Array.isArray(points) ? (
        <ol className="text-sm mb-1">
          {points?.map((p) => <ListItem key={p}>{p}</ListItem>)}
        </ol>
      ) : (
        points
      )}
      <LineSeparator />
    </div>
  );
};

const ExperienceSection = () => (
  <FullWidthColumn>
    <SectionHeading>Experience</SectionHeading>
    <section className="flex flex-col space-y-2">
      {Experiences.map((j, i) => (
        <Job key={i} {...j} />
      ))}
    </section>
  </FullWidthColumn>
);

export default ExperienceSection;
