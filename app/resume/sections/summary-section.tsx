import React from "react";
import FullWidthColumn from "../components/FullWidthColumn";
import SectionHeading from "../components/SectionHeading";
import { Summary } from "../data";

const SummarySection = () => (
  <FullWidthColumn>
    <SectionHeading id={"aboutMe"}>Summary</SectionHeading>
    <section>
      <p className="text-sm print:tracking-tighter print:leading-none">
        {Summary}
      </p>
    </section>
  </FullWidthColumn>
);

export default SummarySection;
