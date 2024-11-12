import React from "react";
import FullWidthColumn from "../components/FullWidthColumn";
import Section from "../components/Section";
import SectionHeading from "../components/SectionHeading";

const SummarySection = () => (
  <FullWidthColumn>
    <SectionHeading id={"aboutMe"}>Summary</SectionHeading>
    <Section>
      <p className="text-sm print:tracking-tighter print:leading-none">
        Senior Software Engineer with 4+ years of experience in React.js, React
        Native, NextJs, Node.js, Express, and TypeScript. Passionate about
        building innovative and performant web and mobile applications.
      </p>
    </Section>
  </FullWidthColumn>
);

export default SummarySection;
