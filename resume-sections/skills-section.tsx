import React from 'react';
import FullWidthColumn from "../components/FullWidthColumn";
import {Heading, Text} from "@chakra-ui/react";

const skills = [
  "Reactjs",
  "React Native",
  "Expo",
  "NextJs",
  "Typescript",
  "Javascript",
  "Graphql",
  "REST api",
  "Redux",
  "Redux Toolkit (RTK)",
  "RTK query",
  "React Query (Tanstack query)",
  "HTML",
  "CSS",
  "Git",
  "GitHub",
  "Tailwind CSS",
  "CSS-in-Js",
  "SCSS",
  "NodeJs",
  "Express",
  "Prisma",
  "Prototyping with Framer",
  "Graphic design & Photo editing",
  "Googling !",
];

const SkillsSection = () => {
  return (
    <FullWidthColumn>
      <Heading as="h2" fontSize="xl" id="skills" textAlign="center">
        Skills
      </Heading>
      <Text as="ol" ml="1rem" fontSize="14px">
        {skills.map((s,i) => {
          return <span key={s}> {s} {i+1 !== skills.length ? "•" : ""}</span>
        })}
      </Text>
    </FullWidthColumn>
  );
};

export default SkillsSection;
