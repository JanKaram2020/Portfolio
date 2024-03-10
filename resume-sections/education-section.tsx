import React from 'react';
import { Heading, Text } from '@chakra-ui/react';
import FullWidthColumn from '../components/FullWidthColumn';
import Section from '../components/Section';

const EducationSection = () => (
  <FullWidthColumn>
    <h2 className="text-xl font-bold leading-[1.2]">Education</h2>
    <hr className="print:border print:border-gray-200 my-1" />
    <Section className="flex flex-col gap-2.5">
      <Text as="div">
        <Heading
          as="h3"
          fontSize="lg"
          sx={{
            '@media print': {
              display: 'inline',
            },
          }}
        >
          BS, Computer Science and Statistics{' '}
        </Heading>
        <Text
          fontSize="14px"
          sx={{
            '@media print': {
              display: 'inline',
            },
          }}
        >
          Alexandria University. (2022)
        </Text>
        {/* <Divider /> */}
      </Text>
      <Text as="div">
        <Heading
          as="h3"
          fontSize="lg"
          sx={{
            '@media print': {
              display: 'inline',
            },
          }}
        >
          Web development specialization{' '}
        </Heading>
        <Text
          fontSize="14px"
          sx={{
            '@media print': {
              display: 'inline',
            },
          }}
        >
          University of Michigan via Coursera (2019)
        </Text>
      </Text>
    </Section>
  </FullWidthColumn>
);

export default EducationSection;
