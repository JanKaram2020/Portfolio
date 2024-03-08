import React from 'react';
import FullWidthColumn from "../components/FullWidthColumn";
import {Divider, Heading, Link, Text} from "@chakra-ui/react";
import Section from "../components/Section";

const ProjectsSection = () => {
  return (
    <FullWidthColumn>
      <Heading as="h2" fontSize="xl" id="projects">
        Projects
      </Heading>
      <Divider my={1} sx={{
        '@media print': {
          border: "1px solid rgba(0,0,0,0.2)"
        }
      }}/>      <Section className={"flex flex-col gap-2.5"}>
        <div>
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
          Stack: React, Gatsby, Graphql, i18next, ThemeUI, and Sanity CMS
        </Text>
        </div>
<div>
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
        <Text fontSize="14px" ml={1}>
          Stack: React, Redux, Redux-toolkit, React-strap, and Bootstrap for styling
        </Text>
</div>      </Section>
    </FullWidthColumn>

  );
};

export default ProjectsSection;
