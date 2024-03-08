import React from 'react';
import FullWidthColumn from "../components/FullWidthColumn";
import {Divider, Heading, Text} from "@chakra-ui/react";
import Section from "../components/Section";

const EducationSection = () => {
  return (
    <FullWidthColumn>
      <Heading as="h2" fontSize="xl">
        Education
      </Heading>
      <Divider my={1} sx={{
        '@media print': {
          border: "1px solid rgba(0,0,0,0.2)"
        }
      }}/>      <Section className={"flex flex-col gap-2.5"}>
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
};

export default EducationSection;
