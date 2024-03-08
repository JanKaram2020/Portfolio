import React from 'react';
import {Heading, Text} from "@chakra-ui/react";
import FullWidthColumn from "../components/FullWidthColumn";

const SummarySection = () => {
  return (
    <FullWidthColumn>
      <Heading as="h2" fontSize="xl" id="aboutMe" textAlign="center">
        Professional Summary
      </Heading>
      <Text fontSize="14px">
        Full-stack developer with 3+ years of experience in React.js, React Native, NextJs, Node.js, Express,  and TypeScript. Passionate about building innovative and performant web and mobile applications.
      </Text>
    </FullWidthColumn>
  );
};

export default SummarySection;
