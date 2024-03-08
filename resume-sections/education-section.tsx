import React from 'react';
import FullWidthColumn from "../components/FullWidthColumn";
import {Heading, Text} from "@chakra-ui/react";

const EducationSection = () => {
  return (
    <FullWidthColumn>
      <Heading as="h2" fontSize="xl" textAlign="center">
        Education
      </Heading>
      <Text as="div">
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
      </Text>
    </FullWidthColumn>
  );
};

export default EducationSection;
