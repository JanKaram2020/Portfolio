import React from 'react';
import FullWidthColumn from "../components/FullWidthColumn";
import {Heading, Link, Text} from "@chakra-ui/react";

const ProjectsSection = () => {
  return (
    <FullWidthColumn>
      <Heading as="h2" fontSize="xl" id="projects" textAlign="center">
        Projects
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
            A responsive PWA multi language blog{' '}
          </Heading>
          <Link
            sx={{
              '@media print': {
                display: 'inline',
              },
            }}
            href="https://lilyannehany.netlify.app/"
            isExternal
            rel="noopener"
          >
            https://lilyannehany.netlify.app/
          </Link>
        </Text>
        <Text fontSize="14px">
          Made it using React for UI development, Gatsby for SSG and
          Graphql for data fetching, i18next for internalization, Theme Ui
          for light & dark mode and styling, and Sanity CMS for content
          management.
        </Text>
        {/* <Divider /> */}
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
            Would you rather game{' '}
          </Heading>
          <Link
            sx={{
              '@media print': {
                display: 'inline',
              },
            }}
            isExternal
            rel="noopener"
            href="https://jan-would-you-rather.surge.sh"
          >
            https://jan-would-you-rather.surge.sh
          </Link>
        </Text>
        <Text fontSize="14px">
          Would you rather is a React and Redux powered web app built to
          mimic would you rather game? built this project with React,
          Redux, Redux-toolkit, React-strap, and Bootstrap for styling.
        </Text>
        {/* <Divider /> */}
      </Text>
    </FullWidthColumn>

  );
};

export default ProjectsSection;
