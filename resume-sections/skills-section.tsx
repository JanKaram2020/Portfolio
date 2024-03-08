import React from 'react';
import FullWidthColumn from "../components/FullWidthColumn";
import {Divider, Heading, Text} from "@chakra-ui/react";

const skills = [
  "Expo",
  "Redux Toolkit",
  "RTK query",
  "Tanstack query",
  "Git",
  "GitHub",
  "Tailwind CSS",
  "Chakra UI",
  "Core UI",
  "CSS-in-Js",
  "SCSS",
  "Prisma",
  "Vitest",
  "Prototyping with Framer",
  "Graphic design & Photo editing",
  "Googling !",
];

const SkillsSection = () => {
  return (
    <FullWidthColumn>
      <Heading as="h2" fontSize="xl" id="skills">
        Skills
      </Heading>
      <Divider my={1} sx={{
        '@media print': {
          border: "1px solid rgba(0,0,0,0.2)"
        }
      }}/>      <Text as="ol" ml="1rem" fontSize="14px">
        {skills.map((s,i) => {
          return <span key={s}> {s} {i+1 !== skills.length ? "•" : ""}</span>
        })}
      </Text>
    </FullWidthColumn>
  );
};

export default SkillsSection;
