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

export default function Eargasm() {
  return (
    <>
      <SEO
        description="Eargasm is a music website built with React by Jan Karam"
        title="Eargasm | Jan Karam"
        image="/eargasmMockup.png"
      />
      <VStack mt="30px" gridGap="30px" alignItems="start" spacing={10}>
        <Heading as="h1" color="red.400" fontSize="3xl">
          Eargasm
        </Heading>
        <Text fontSize="lg">
          Eargasm is a music website built with React.
          <br />I built this project with React and React-strap and Bootstrap
          for styling.
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
              <ListItemColor>Bootstrap</ListItemColor>
              <ListItemColor>Fuse.js</ListItemColor>
              <ListItemColor>JSON file as a database</ListItemColor>
            </UnorderedList>
          </VStack>
          <VStack>
            <Heading as="h2" fontSize="lg" color="red.300">
              Code
            </Heading>
            <UnorderedList sx={{ listStyle: 'none' }}>
              <ListItemColor>
                <Link
                  href="https://github.com/JanKaram2020/eargasm.git"
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
                  href="https://eargasm.surge.sh/"
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
            src="/eargasmMockup.png"
            width={900}
            height={380}
            objectFit="cover"
            alt="screenshots of eargasm on different devices"
          />
        </MotionCenter>
        <SimpleGrid columns={[1, 1, 2]}>
          <Box>
            <Heading as="h2" fontSize="2xl" mb="30px" color="red.300">
              Why this stack?
            </Heading>
            <Text fontSize="lg">
              i choose React because I wanted to get more familiar with and make
              a project on my own instead of following tutorials.
              <br /> Fuse.js was the search option of choice because I didn't
              want to build a full backend for this simple app with it's small
              database.
              <br />
              Boostrap was the styling framework because I wanted to get my more
              familiar with React without focusing too much on styling.
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
                Gained more experience with React and it's ecosystem.
              </ListItemColor>{' '}
              <ListItemColor>
                used fuse js and learned how to make a mini fuzzy search engine.
              </ListItemColor>
            </UnorderedList>
          </Text>
        </VStack>
      </VStack>
    </>
  );
}
