import React from 'react';
import {
  Flex,
  Heading,
  Text,
  VisuallyHidden,
  UnorderedList,
  Grid,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import AnimatedLogo from '../components/AnimatedLogo';
import AboutMe from '../components/AboutMe';
import ListItem from '../components/ListItemColor';
import Projects from '../components/Projects';

const AnimatedText = motion(Text);
export default function IndexPage(): React.ReactElement {
  return (
    <>
      <Flex
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        gridGap={['80px', '40px', '30px', '20px']}
        p="30px"
        height="100vh"
      >
        <AnimatedText
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          as="h1"
          color="red.400"
          fontSize="5xl"
        >
          Hello, I'm
        </AnimatedText>
        <AnimatedLogo />
        <VisuallyHidden>
          <Heading as="h1">Jan Karam</Heading>
        </VisuallyHidden>
      </Flex>
      <AboutMe />
      <Heading
        as="h2"
        position="relative"
        mt="10vh"
        _after={{
          content: '""',
          position: 'absolute',
          bottom: 0,
          display: 'block',
          width: ['8rem', '8rem', '10rem'],
          height: '2px',
          transform: 'scaleX(0)',
          background: 'red.400',
          transition: 'transform 250ms ease-in-out',
        }}
        sx={{
          '&:hover': {
            '&:after': {
              transform: 'scaleX(1)',
            },
          },
        }}
      >
        My Skills
      </Heading>
      <Grid
        pt="1rem"
        fontSize="1.5rem"
        gridTemplateColumns={['1fr', '1fr', 'repeat(3,1fr)']}
        justifyContent="space-evenly"
        alignItems="center"
      >
        <UnorderedList sx={{ listStyle: 'none' }}>
          <ListItem>Typescript</ListItem>
          <ListItem>Javascript</ListItem>
          <ListItem>React.js</ListItem>
          <ListItem>Next js & Gatsby js</ListItem>
          <ListItem>HTML & CSS</ListItem>
        </UnorderedList>
        <UnorderedList sx={{ listStyle: 'none' }}>
          <ListItem>Git & Github</ListItem>
          <ListItem>SCSS</ListItem>
          <ListItem>Bootstrap</ListItem>
          <ListItem>Styled-Components</ListItem>
          <ListItem>Chakra-Ui</ListItem>
        </UnorderedList>
        <UnorderedList sx={{ listStyle: 'none' }}>
          <ListItem>Ui design</ListItem>
          <ListItem>Photoshop</ListItem>
          <ListItem>Prototyping</ListItem>
          <ListItem>Graphic design</ListItem>
          <ListItem>Googling :D</ListItem>
        </UnorderedList>
      </Grid>
      <Heading
        as="h2"
        position="relative"
        mt="10vh"
        _after={{
          content: '""',
          position: 'absolute',
          bottom: 0,
          display: 'block',
          width: ['25rem', '25rem', '30rem'],
          height: '2px',
          transform: 'scaleX(0)',
          background: 'red.400',
          transition: 'transform 250ms ease-in-out',
        }}
        sx={{
          '&:hover': {
            '&:after': {
              transform: 'scaleX(1)',
            },
          },
        }}
      >
        What I've been working on
      </Heading>
      <Text fontSize="1.5rem" pt="1rem">
        I like to stay busy and constantly learn new technologies and use them
        in a project.
        <br /> Take a look at some of the projects I made.
      </Text>
      <Projects />
    </>
  );
}
