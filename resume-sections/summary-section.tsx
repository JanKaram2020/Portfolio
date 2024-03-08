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
        Meticulous full stack web developer trained in React js, Node js,
        and Express with over 3 years of experience and passion for
        creating web applications.
      </Text>
    </FullWidthColumn>
  );
};

export default SummarySection;
