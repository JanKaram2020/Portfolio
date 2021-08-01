import {
  Heading,
  VStack,
  Text,
  UnorderedList,
  Link,
  SimpleGrid,
  Box,
  Center,
  Flex,
} from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import ListItemColor from '../../components/ListItemColor';

const MotionCenter = motion(Center);
export default function LilyanneBlog() {
  return (
    <>
      <VStack mt="30px" gridGap="30px" alignItems="start" spacing={10}>
        <Heading as="h1" color="red.400" fontSize="3xl">
          Writing by Lilyanne
        </Heading>
        <Text fontSize="lg">
          Writing by Lilyanne is a JAMstack powered blog built for my dear
          friend Lilyanne. <br />I built this project from scratch with Gatsby,
          React ,GraphQL, Theme-UI, Framer motion , react-intl and Sanity CMS.
          <br />
          The blog is available in Arabic , English and French and can be viewed
          in light and dark mode.
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
              <ListItemColor>Gatsby</ListItemColor>
              <ListItemColor>React</ListItemColor>
              <ListItemColor>GraphQL</ListItemColor>
              <ListItemColor>Theme-UI</ListItemColor>
              <ListItemColor>Framer motion</ListItemColor>
              <ListItemColor>react-intl</ListItemColor>
              <ListItemColor>Sanity CMS</ListItemColor>
            </UnorderedList>
          </VStack>
          <VStack>
            <Heading as="h2" fontSize="lg" color="red.300">
              Code
            </Heading>
            <UnorderedList sx={{ listStyle: 'none' }}>
              <ListItemColor>
                Frontend: &nbsp;
                <Link
                  href="https://github.com/JanKaram2020/Lilyanne-blog-gatsby"
                  textDecoration="underline"
                  isExternal
                  rel="noopener"
                >
                  Repository
                </Link>
              </ListItemColor>
              <ListItemColor>
                CMS: &nbsp;{' '}
                <Link
                  href="https://github.com/JanKaram2020/Lilyanne-blog-cms"
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
                  href="https://github.com/JanKaram2020/Lilyanne-blog-gatsby"
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
        <MotionCenter w="100%" layoutId="Writing by Lilyanne">
          <Image
            src="/lilyanneMockup.png"
            width={900}
            height={380}
            objectFit="cover"
            alt="screenshots of writing by lilyanne on different devices"
          />
        </MotionCenter>
        <SimpleGrid columns={[1, 1, 2]}>
          <Box>
            <Heading as="h2" fontSize="2xl" mb="30px" color="red.300">
              Why this stack?
            </Heading>
            <Text fontSize="lg">
              I wanted the website to be multi-lang and I tried a lot of content
              management systems but the only one who supported internalization
              the way I wanted was Sanity CMS. also it's ease of use and
              customization made it the clear winner for me.
              <br /> After choosing the CMS choosing Gatsby was easy, because of
              it's plugin system , how it's easy to make a site multi-lang using
              it and it's amazing integration with Sanity CMS.
              <br />
              Theme-UI was the styling choice because I wanted the blog to
              support dark mode without losing my sanity, it's amazing and
              supports multiple color modes by default. and framer motion
              because of it's amazing performance and ease of use.
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
            <Link href="https://www.sanity.io/" isExternal rel="noopener">
              <Image
                src="/logos/sanity.png"
                width={190}
                height={72.5}
                alt="sanity io logo"
              />
            </Link>
            <Link href="https://www.gatsbyjs.com/" isExternal rel="noopener">
              <Image
                src="/logos/gatsby.png"
                width={190}
                height={72.5}
                alt="gatsby logo"
              />
            </Link>
            <Link href="https://theme-ui.com/" isExternal rel="noopener">
              <Image
                src="/logos/themeui.png"
                width={190}
                height={72.5}
                alt="theme ui logo"
              />
            </Link>
            <Link href="https://www.framer.com/docs/" isExternal rel="noopener">
              <Image
                src="/logos/framer.png"
                width={190}
                height={72.5}
                alt="framer logo"
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
            I could spend all day describing the lessons that I learned while
            working on this project, but the most important ones involved my new
            found understanding of Gatsby,GraphQl, Git management, and API
            integration with Sanity Io. As my first large project using React, I
            learned a lot of lessons regarding code structure and organization.
          </Text>
        </VStack>
      </VStack>
    </>
  );
}
