import React from "react";
import FullWidthColumn from "../components/FullWidthColumn";
import SectionHeading from "../components/SectionHeading";

const skills = [
  "Zustand",
  "Typescript",
  "Jest",
  "React Server Components",
  "Nextjs Pages router",
  "Nextjs App Router",
  "Expo Router",
  "React Navigation",
  "React Router",
  "Expo",
  "React Native Reanimated",
  "Redux Toolkit",
  "RTK query",
  "React Hooks",
  "Tanstack query",
  "Git",
  "Github",
  "Tailwind CSS",
  "Chakra UI",
  "Core UI",
  "CSS-in-JS",
  "SCSS",
  "Prisma",
  "Vitest",
  "Docker",
  "Prototyping with Framer",
  "Figma",
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
