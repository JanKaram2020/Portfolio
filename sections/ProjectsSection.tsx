import { Heading, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';
import Project from 'components/Project';

const ProjectsSection = () => (
  <>
    <h2
      id="projects"
      className="text-3xl font-bold relative mt-10vh after:(content-empty absolute bottom-0 block h-2px scale-x-0 bg-red-400 transform duration-250 ease-in-out w-95 max-w-80vw) hover:after:scale-x-100"
    >
      What I've been working on
    </h2>
    <Text fontSize="1.5rem" pt="1rem">
      I like to stay busy and constantly learn new technologies and use them in
      a project.
      <br /> Take a look at some of the projects I made.
    </Text>
    <SimpleGrid
      columns={[1, 1, 2]}
      spacing={10}
      p="2rem"
      overflowWrap="normal"
      minChildWidth="350px"
      columnGap="200px"
      justifyContent="center"
      alignContent="center"
    >
      <Project
        image="/lilyanneMockup.png"
        text="A responsive PWA multi language blog built with Gatsby Js, Theme UI and Sanity CMS"
        page="writingbylilyanne"
        alt="Lilyanne Hany's blog screenshot"
        name="Writing by Lilyanne"
      />
      <Project
        image="/test-table.PNG"
        text="A website to get your test table by course codes or names
          built with Nextjs, Nextjs's api routes, puppeteer and Mantine"
        page="testtable"
        alt="test table screenshot"
        name="Test table"
      />
      <Project
        image="/wouldYouRatherMockup.png"
        text="Would you rather game built with Reactjs , Redux and Redux-toolkit"
        page="wouldyourather"
        alt="Would you rather website screenshot"
        name="Would you rather"
      />
      <Project
        image="/eargasmMockup.png"
        text="A responsive music website built with React Js, Bootstrap and JSON file as a database"
        page="eargasm"
        alt="Eargasm website screenshot"
        name="Eargasm"
      />
    </SimpleGrid>
  </>
);

export default ProjectsSection;
