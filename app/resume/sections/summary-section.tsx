import React from "react";
import FullWidthColumn from "../components/FullWidthColumn";
import Section from "../components/Section";

const SummarySection = () => (
  <FullWidthColumn>
    <h2 className="text-xl font-bold leading-[1.2]" id="aboutMe">
      Summary
    </h2>
    <hr className="print:border print:border-gray-200 my-1" />
    <Section>
      <p className="text-sm">
        Full-stack developer with 3+ years of experience in React.js, React
        Native, NextJs, Node.js, Express, and TypeScript. Passionate about
        building innovative and performant web and mobile applications.
      </p>
    </Section>
  </FullWidthColumn>
);

export default SummarySection;
