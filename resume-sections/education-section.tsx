import React from 'react';
import FullWidthColumn from '../components/FullWidthColumn';
import Section from '../components/Section';

const EducationSection = () => (
  <FullWidthColumn>
    <h2 className="text-xl font-bold leading-[1.2]">Education</h2>
    <hr className="print:border print:border-gray-200 my-1" />
    <Section className="flex flex-col gap-2.5">
      <div>
        <h3 className={"text-lg print:inline"}>
          BS, Computer Science and Statistics{' '}
        </h3>
        <div className={"text-sm print:inline"}
        >
          Alexandria University. (2022)
        </div>
      </div>
      <div>
        <h3
          className={"text-lg print:inline"}
        >
          Web development specialization{' '}
        </h3>
        <p
          className={"print:inline text-sm"}
        >
          University of Michigan via Coursera (2019)
        </p>
      </div>
    </Section>
  </FullWidthColumn>
);

export default EducationSection;
