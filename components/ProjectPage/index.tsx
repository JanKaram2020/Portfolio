import {
  Box,
  Flex,
  Heading,
  Link,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react';
import ListItemColor from 'components/ListItemColor';
import SEO from 'components/SEO';
import { ReactNode } from 'react';
import Technology from './Technology';
import type { IProjectPage } from './types';
import ProjectImage from './ProjectImage';

const UnorderedList = ({ children }: { children: ReactNode }) => (
  <ul className="list-none">{children}</ul>
);
export default function ProjectPage({
  Seo,
  title,
  subtitle,
  stack,
  links,
  whyStack,
  stackInfo,
  lessons,
  projectImage,
}: IProjectPage) {
  return (
    <>
      <SEO {...Seo} />
      <VStack mt="30px" gridGap="30px" alignItems="start" spacing={10}>
        <Heading as="h1" color="red.400" fontSize="3xl">
          {title}
        </Heading>
        <Text fontSize="lg">{subtitle}</Text>
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
            <UnorderedList>
              {stack.map((t) => (
                <ListItemColor key={t}>{t}</ListItemColor>
              ))}
            </UnorderedList>
          </VStack>
          <VStack>
            <Heading as="h2" fontSize="lg" color="red.300">
              Code
            </Heading>
            <UnorderedList>
              {links.code.map((c) => (
                <ListItemColor key={c.git}>
                  {c.name ? `${c.name}: ` : ''}
                  <Link
                    href={c.git}
                    textDecoration="underline"
                    isExternal
                    rel="noopener"
                  >
                    Repository
                  </Link>
                </ListItemColor>
              ))}
            </UnorderedList>
          </VStack>
          <VStack>
            <Heading as="h2" fontSize="lg" color="red.300">
              Live
            </Heading>
            <UnorderedList>
              <ListItemColor>
                <Link
                  href={links.live}
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
        <ProjectImage image={projectImage} title={title} />
        <SimpleGrid columns={[1, 1, 2]}>
          <Box>
            <Heading as="h2" fontSize="2xl" mb="30px" color="red.300">
              Why this stack?
            </Heading>
            <Text fontSize="lg">{whyStack}</Text>
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
            {[stackInfo.map((t) => <Technology key={t} tech={t} />)]}
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
          <Text fontSize="lg" maxWidth="60ch" as="div">
            {lessons.length === 1 ? (
              lessons[0]
            ) : (
              <UnorderedList>
                {lessons.map((l) => (
                  <ListItemColor key={l}>{l}</ListItemColor>
                ))}
              </UnorderedList>
            )}
          </Text>
        </VStack>
      </VStack>
    </>
  );
}
