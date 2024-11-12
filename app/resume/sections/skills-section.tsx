import React from "react";
import FullWidthColumn from "../components/FullWidthColumn";
import SectionHeading from "../components/SectionHeading";

const skills = [
  "Jest",
  "Expo",
  "Redux Toolkit",
  "RTK query",
  "Tanstack query",
  "Git",
  "Github",
  "Tailwind CSS",
  "Chakra UI",
  "Core UI",
  "CSS-in-Js",
  "SCSS",
  "Prisma",
  "Vitest",
  "Prototyping with Framer",
  "Graphic design & Photo Editing",
  "Agile",
  "Googling!",
];

const SkillsSection = () => (
  <FullWidthColumn>
    <SectionHeading>Skills</SectionHeading>
    <ul className="text-sm flex flex-row gap-2 flex-wrap">
      {skills.map((s) => (
        <li key={s} className={"font-bold border-b-2 capitalize"}>
          {s}
        </li>
      ))}
    </ul>
  </FullWidthColumn>
);

export default SkillsSection;
