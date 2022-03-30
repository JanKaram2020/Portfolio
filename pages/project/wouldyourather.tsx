import {
  Box,
  Center,
  Flex,
  Heading,
  Link,
  SimpleGrid,
  Text,
  UnorderedList,
  VStack,
} from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import ListItemColor from 'components/ListItemColor';
import SEO from 'components/SEO';

const MotionCenter = motion(Center);

export default function WouldYouRather() {
  return (
    <>
      <SEO
        description="Would you rather is a React and Redux powered web app built to mimic would you rather game made by Jan Karam.this project is built with React ,Redux, Redux-toolkit , React-strap and Bootstrap for styling."
        title="Would You Rather | Jan Karam"
        image="/wouldYouRatherMockup.png"
      />
      <VStack mt="30px" gridGap="30px" alignItems="start" spacing={10}>
        <Heading as="h1" color="red.400" fontSize="3xl">
          Would You Rather
        </Heading>
        <Text fontSize="lg">
          Would you rather is a React and Redux powered web app built to mimic
          would you rather game. <br />I built this project from with React
          ,Redux, Redux-toolkit , React-strap and Bootstrap for styling.
        </Text>
        <SimpleGrid
          columns={[1, 2, 3]}
          w="100%"
          gridGap="30px"
          justifyContent="start"
          alignContent="start"
        >
          <VStack>
            <Heading as="h2" fontSize="lg" color="red.300">
              Stack
            </Heading>
            <UnorderedList sx={{ listStyle: 'none' }}>
              <ListItemColor>React</ListItemColor>
              <ListItemColor>Redux</ListItemColor>
              <ListItemColor>Bootstrap</ListItemColor>
              <ListItemColor>JSON file as a fake database</ListItemColor>
            </UnorderedList>
          </VStack>
          <VStack>
            <Heading as="h2" fontSize="lg" color="red.300">
              Code
            </Heading>
            <UnorderedList sx={{ listStyle: 'none' }}>
              <ListItemColor>
                <Link
                  href="https://github.com/JanKaram2020/would-you-rather-game"
                  textDecoration="underline"
                  isExternal
                  rel="noopener"
                >
                  Repository
                </Link>
              </ListItemColor>
            </UnorderedList>
          </VStack>
          <VStack>
            <Heading as="h2" fontSize="lg" color="red.300">
              Live
            </Heading>
            <UnorderedList sx={{ listStyle: 'none' }}>
              <ListItemColor>
                <Link
                  href="https://jan-would-you-rather.surge.sh/"
                  isExternal
                  rel="noopener"
                  textDecoration="underline"
                >
                  View site
                </Link>
              </ListItemColor>
            </UnorderedList>
          </VStack>
        </SimpleGrid>
        <MotionCenter w="100%" layoutId="Would you rather">
          <Image
            src="/wouldYouRatherMockup.png"
            width={900}
            height={380}
            objectFit="cover"
            alt="screenshots of would you rather on different devices"
          />
        </MotionCenter>
        <SimpleGrid columns={[1, 1, 2]}>
          <Box>
            <Heading as="h2" fontSize="2xl" mb="30px" color="red.300">
              Why this stack?
            </Heading>
            <Text fontSize="lg">
              React was the ui framework for me because my familiarity with it
              and it's amazing react-redux package that binds both well.
              <br /> I chose Redux because I wanted a managed global store and
              predictable state
              <br />
              Boostrap was the styling framework because I wanted to get my
              hands dirty with Redux without focusing too much on styling.
            </Text>
          </Box>
          <Flex
            flexDirection={['row', 'column']}
            alignItems="center"
            justifyContent="center"
            flexWrap="wrap"
            gridGap="15px"
            borderRadius="15px"
            display={['none', 'flex']}
          >
            <Link href="https://reactjs.org/" isExternal rel="noopener">
              <Image
                src="/logos/react.png"
                width={190}
                height={72.5}
                alt="react js logo"
              />
            </Link>
            <Link href="https://redux.js.org/" isExternal rel="noopener">
              <Image
                src="/logos/redux.png"
                width={190}
                height={72.5}
                alt="Redux js logo"
              />
            </Link>
            <Link
              href="https://getbootstrap.com/docs/5.0/getting-started/introduction/"
              isExternal
              rel="noopener"
            >
              <Image
                src="/logos/bootstrap.png"
                width={190}
                height={72.5}
                alt="bootstrap logo"
              />
            </Link>
          </Flex>
        </SimpleGrid>
        <VStack w="100%">
          <Heading
            as="h2"
            fontSize="2xl"
            mb="30px"
            color="red.300"
            textAlign="center"
          >
            Lessons learned
          </Heading>
          <Text fontSize="lg" maxWidth="60ch">
            <UnorderedList sx={{ listStyle: 'none' }}>
              <ListItemColor>
                Never write vanilla Redux again :D , seriously after writing a
                few reduces and actions , I felt that it was complex, hard to
                manage and code was hard to keep track of. then I found
                Redux-toolkit package and I was amazed by the amount of
                boilerplate i removed from the code base and it was amazing.
              </ListItemColor>{' '}
              <ListItemColor>
                Gained more experience with React and it's ecosystem.
              </ListItemColor>
            </UnorderedList>
          </Text>
        </VStack>
      </VStack>
    </>
  );
}
