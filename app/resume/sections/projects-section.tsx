import React from "react";
import FullWidthColumn from "../components/FullWidthColumn";
import Section from "../components/Section";
import SectionHeading from "../components/SectionHeading";
import LineSeparator from "../components/LineSeparator";

const ProjectsSection = () => (
  <FullWidthColumn>
    <SectionHeading>Projects</SectionHeading>
    <Section className="flex flex-col gap-2.5">
      <div>
        <div>
          <a
            className="block print-inline underline"
            href="https://www.jankaram.com/project/writing-by-lilyanne"
            rel="noopener"
          >
            <h3 className="text-lg print:text-base print:mb-1">
              Writing By Lilyanne
            </h3>
          </a>
        </div>
        <ol className="text-sm">
          {[
            "JAMstack powered blog",
            "I built this project from scratch with Gatsby, React, GraphQL, Theme-UI, Framer motion, react-intl and Sanity CMS.",
            "The blog is available in Arabic, English and French and can be viewed in light and dark mode.",
          ].map((p) => (
            <li
              key={p}
              className="m-0 p-0 before:(content-['•'] text-2xl m-0 p-0 leading-none)"
            >
              {p}
            </li>
          ))}
        </ol>
      </div>
      <LineSeparator />
      <div>
        <div>
          <a
            className="block underline"
            rel="noopener"
            href="https://www.jankaram.com/project/would-you-rather"
          >
            <h3 className="text-lg print:text-base print:mb-1">
              Test Table Generator
            </h3>
          </a>
        </div>
        <ol className="text-sm">
          {[
            "Table getter website that scrapes the faculty of science's test table page and displays the results.",
            "Built this project using Nextjs, Puppeteer and Mantine component library.",
          ].map((p) => (
            <li
              key={p}
              className="m-0 p-0 before:(content-['•'] text-2xl m-0 p-0 leading-none)"
            >
              {p}
            </li>
          ))}
        </ol>
      </div>
    </Section>
  </FullWidthColumn>
);

export default ProjectsSection;
