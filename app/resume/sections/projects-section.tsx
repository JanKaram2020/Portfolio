import React from "react";
import FullWidthColumn from "../components/FullWidthColumn";
import Section from "../components/Section";
import SectionHeading from "../components/SectionHeading";
import LineSeparator from "../components/LineSeparator";

const Projects = [
  {
    name: "Writing By Lilyanne",
    link: "https://www.jankaram.com/project/writing-by-lilyanne",
    points: [
      "JAMstack powered blog",
      "I built this project from scratch with Gatsby, React, GraphQL, Theme-UI, Framer motion, react-intl and Sanity CMS.",
      "The blog is available in Arabic, English and French and can be viewed in light and dark mode.",
    ],
  },
  {
    name: "Test Table Generator",
    link: "https://www.jankaram.com/project/would-you-rather",
    points: [
      "Table getter website that scrapes the faculty of science's test table page and displays the results.",
      "Built this project using Nextjs, Puppeteer and Mantine component library.",
    ],
  },
];

const ProjectsSection = () => (
  <FullWidthColumn>
    <SectionHeading>Projects</SectionHeading>
    <Section className="flex flex-col gap-2.5">
      {Projects.map(({ name, link, points }) => (
        <div className={"group"} key={name}>
          <div>
            <a
              className="block print-inline underline"
              href={link}
              rel="noopener"
            >
              <h3 className="text-lg print:text-base print:mb-1">{name}</h3>
            </a>
          </div>
          <ol className="text-sm">
            {points.map((p) => (
              <li
                key={p}
                className="m-0 p-0 before:(content-['•'] text-2xl m-0 p-0 leading-none)"
              >
                {p}
              </li>
            ))}
          </ol>
          <LineSeparator />
        </div>
      ))}
    </Section>
  </FullWidthColumn>
);

export default ProjectsSection;
