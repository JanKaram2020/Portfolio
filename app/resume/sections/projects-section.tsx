import React from "react";
import FullWidthColumn from "../components/FullWidthColumn";
import SectionHeading from "../components/SectionHeading";
import LineSeparator from "../components/LineSeparator";
import ListItem from "../components/ListItem";
import { Projects } from "../data";

const ProjectsSection = () => (
  <FullWidthColumn>
    <SectionHeading>Projects</SectionHeading>
    <section className="flex flex-col gap-2.5">
      {Projects.map(({ name, href, points }) => (
        <div className={"group"} key={name}>
          <div>
            <a
              className="block print-inline underline"
              href={href}
              rel="noopener"
            >
              <h3 className="text-lg print:text-base print:mb-1">{name}</h3>
            </a>
          </div>
          <ol className="text-sm">
            {points.map((p) => (
              <ListItem key={p}>{p}</ListItem>
            ))}
          </ol>
          <LineSeparator />
        </div>
      ))}
    </section>
  </FullWidthColumn>
);

export default ProjectsSection;
