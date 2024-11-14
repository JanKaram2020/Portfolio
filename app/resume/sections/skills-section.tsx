import React from "react";
import FullWidthColumn from "../components/FullWidthColumn";
import SectionHeading from "../components/SectionHeading";
import { Skills } from "../data";

const SkillsSection = () => (
  <FullWidthColumn>
    <SectionHeading>Skills</SectionHeading>
    <ul className="text-sm flex flex-row gap-2 flex-wrap">
      {Skills.map((s) => (
        <li key={s} className={"font-bold border-b-2 capitalize"}>
          {s}
        </li>
      ))}
    </ul>
  </FullWidthColumn>
);

export default SkillsSection;
