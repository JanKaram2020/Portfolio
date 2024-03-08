import React from 'react';
import {Divider, Heading, Text} from "@chakra-ui/react";
import FullWidthColumn from "../components/FullWidthColumn";
import Section from "../components/Section";

const SummarySection = () => {
  return (
    <FullWidthColumn>
      <Heading as="h2" fontSize="xl" id="aboutMe">
        Summary
      </Heading>
      <Divider my={1} sx={{
        '@media print': {
          border: "1px solid rgba(0,0,0,0.2)"
        }
      }}/>
      <Section>
        <Text fontSize="14px">
        Full-stack developer with 3+ years of experience in React.js, React Native, NextJs, Node.js, Express,  and TypeScript. Passionate about building innovative and performant web and mobile applications.
      </Text>
      </Section>
    </FullWidthColumn>
  );
};

export default SummarySection;
