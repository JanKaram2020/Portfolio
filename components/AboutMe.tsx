import React from 'react';
import { SimpleGrid, Text, Link as StyledLink } from '@chakra-ui/react';
import FadeInWhenVisible from './FadeInWhenVisible';

export default function AboutMe(): React.ReactElement {
  return (
    <SimpleGrid
      id="aboutMe"
      spacing={5}
      columns={[1, 1, 3]}
      minChildWidth="320px"
      alignContent="center"
      justifyItems="center"
      my="6vw"
    >
      <Text
        maxWidth="60ch"
        ml="2"
        mr="4"
        fontSize="xl"
        // gridArea={['1 / 1 / 2 / 2', '1 / 1 / 2 / 2', '1 / 1 / 2 / 2']}
      >
        I'm a passionate introvert who loves building web apps and sites. <br />
        My first experience with web development was when I was 12, but it
        didn’t last long: <br />I was always fascinated by websites and wanted
        to make my own so I searched the internet on how to make websites and
        found&nbsp;
        <StyledLink
          href="https://www.ahlamontada.com/"
          isExternal
          rel="noopener"
          color="red.400"
        >
          ahlamontada.com
        </StyledLink>
        &nbsp;then I made my first website after this I forgot about it.
        <br /> Years later I searched about the website and found it at&nbsp;
        <StyledLink
          href="https://jan12.rigala.net/"
          isExternal
          rel="noopener"
          color="red.400"
        >
          https://jan12.rigala.net/
        </StyledLink>
        &nbsp; (if you're a recruiter please don't visit it :D )
      </Text>
      <FadeInWhenVisible />
      <Text
        maxWidth="60ch"
        ml="2"
        mr="4"
        fontSize="xl"
        // gridArea={['', '', '1 / 3 / 2 / 4']}
      >
        then I took a web development course at my college in my second year and
        fell in love with it over again. since then, I’ve been honing my skills
        and learning Javascript and front-end development. I recently took web
        development specialization from the University of Michigan and took the
        open-source track at ITI summer internship.
        <br />
        I’m seeking a full-time role where I can help a company achieve its
        goals.
      </Text>
    </SimpleGrid>
  );
}
