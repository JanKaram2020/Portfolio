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
import Image from 'next/legacy/image';
import React from 'react';
import { motion } from 'framer-motion';
import ListItemColor from 'components/ListItemColor';
import SEO from 'components/SEO';

const MotionCenter = motion(Center);

export default function TestTable() {
  return (
    <>
      <SEO
        description="Test table is a table generator website built with Nextjs and pupeteer by Jan Karam"
        title="Test table | Jan Karam"
        image="/test-table.PNG"
      />
      <VStack mt="30px" gridGap="30px" alignItems="start" spacing={10}>
        <Heading as="h1" color="red.400" fontSize="3xl">
          Test table generator
        </Heading>
        <Text fontSize="lg">
          Test table generator is a table getter website that scrapes the
          faculty of science's test table page and displays the results.
          <br />I built this project using Nextjs, Puppeteer and Mantine
          component library.
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
              <ListItemColor>Next js</ListItemColor>
              <ListItemColor>React</ListItemColor>
              <ListItemColor>Puppeteer</ListItemColor>
              <ListItemColor>Mantine component library</ListItemColor>
            </UnorderedList>
          </VStack>
          <VStack>
            <Heading as="h2" fontSize="lg" color="red.300">
              Code
            </Heading>
            <UnorderedList sx={{ listStyle: 'none' }}>
              <ListItemColor>
                <Link
                  href="https://github.com/JanKaram2020/test-table"
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
                  href="https://test-table-jankaram2020.vercel.app/"
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
            src="/test-table.PNG"
            width={900}
            height={380}
            objectFit="cover"
            alt="screenshot of test table site"
          />
        </MotionCenter>
        <SimpleGrid columns={[1, 1, 2]}>
          <Box>
            <Heading as="h2" fontSize="2xl" mb="30px" color="red.300">
              Why this stack?
            </Heading>
            <Text fontSize="lg">
              I choose Next-js and React because of the awesome DX and api
              routes.
              <br />
              Puppeteer because in my opinion it's the best library to web
              scrape using javascript and is used here to scrape the test table
              page and get the user's courses by codes or names.
              <br />
              Mantine dev was the component library of choice because of it's
              amazing , beautiful and accessible components.
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
            <Link href="https://nextjs.org/" isExternal rel="noopener">
              <Image
                src="/logos/next.png"
                width={190}
                height={72.5}
                alt="Next js logo"
                objectFit="cover"
              />
            </Link>
            <Link href="https://pptr.dev/" isExternal rel="noopener">
              <Image
                src="/logos/puppeteer.png"
                width={60}
                height={90}
                alt="puppeteer logo"
                objectFit="cover"
              />
            </Link>
            <Link href="https://mantine.dev/" isExternal rel="noopener">
              <Image
                src="/logos/mantine.png"
                width={240}
                height={62}
                alt="mantine logo"
                objectFit="cover"
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
                Solved a problem for me and other students and future students
              </ListItemColor>
              <ListItemColor>
                Gained more experience with Puppeteer and Nextjs's api routes.
              </ListItemColor>{' '}
              <ListItemColor>used mantine dev component library.</ListItemColor>
            </UnorderedList>
          </Text>
        </VStack>
      </VStack>
    </>
  );
}
