import {
  Heading,
  SimpleGrid,
  Link,
  Text,
  VStack,
  Divider,
  Center,
  Button,
} from '@chakra-ui/react';
import SEO from 'components/SEO';
import type { ReactNode } from 'react';
import TimeSinceHire from 'components/TimeSinceHire';
import { WHERE } from '../lib/constants';

const FullWidthColumn = ({ children }: { children: ReactNode }) => (
  <SimpleGrid
    columns={{ sm: 1 }}
    sx={{
      '@media print': {
        gridTemplateColumns: '1fr',
      },
    }}
    w="100%"
  >
    {children}
  </SimpleGrid>
);

export default function ResumePage() {
  return (
    <>
      <SEO title="Resume | Jan Karam" />
      <Center
        mt="5vh"
        sx={{
          '@media print': {
            m: 0,
            display: 'none',
          },
        }}
      >
        <Button
          // href="/Resume.pdf"
          // download="Jan-Karam-Resume.pdf"
          textAlign="center"
          fontSize="2xl"
          fontWeight="bold"
          colorScheme="blue"
          variant="link"
          onClick={() => window.print()}
        >
          Download Resume
        </Button>
      </Center>
      <Center>
        <VStack
          spacing={2}
          divider={<Divider />}
          maxW="700px"
          mt="5vh"
          borderWidth="5px"
          borderRadius="lg"
          p="20px"
          sx={{
            '@media print': {
              m: 0,
              p: 0,
              minWidth: '100%',
              border: 'none',
              backgroundColor: 'white',
              color: 'black',
            },
          }}
        >
          <SimpleGrid>
            <Heading
              as="h1"
              textAlign="center"
              fontSize="2xl"
              display="none"
              sx={{
                '@media print': {
                  display: 'block',
                },
              }}
            >
              Jan Karam Aziz Ghaly
            </Heading>
            <Heading
              as="h2"
              textAlign="center"
              fontSize="2xl"
              display="block"
              sx={{
                '@media print': {
                  display: 'none',
                },
              }}
            >
              Contact
            </Heading>
            <SimpleGrid
              columns={[1, 3]}
              sx={{
                '@media print': {
                  gridTemplateColumns: '1fr 1fr 1fr 1fr',
                },
              }}
              gap="5px"
            >
              <Center>
                <Link
                  href="mailto: jankaram2020@gmail.com"
                  isExternal
                  target="_blank"
                >
                  jankaram2020@gmail.com
                </Link>
              </Center>
              <Center
                display="none"
                sx={{
                  '@media print': {
                    display: 'flex',
                  },
                }}
              >
                <Link href="tel: +201277440641" isExternal target="_blank">
                  (+2) 012 77 44 0641
                </Link>
              </Center>
              <Center>
                <Link
                  href="https://www.linkedin.com/in/jankaram2020/"
                  isExternal
                  target="_blank"
                >
                  LinkedIn
                </Link>
              </Center>
              <Center>
                <Link
                  href="https://github.com/JanKaram2020"
                  isExternal
                  target="_blank"
                >
                  Github
                </Link>
              </Center>
            </SimpleGrid>
          </SimpleGrid>
          <FullWidthColumn>
            <Heading as="h2" fontSize="xl" id="aboutMe" textAlign="center">
              Professional Summary
            </Heading>
            <Text fontSize="14px">
              Meticulous full stack web developer trained in React js, Node js,
              and Express with over 3 years of experience and passion for
              creating web applications.
            </Text>
          </FullWidthColumn>
          <FullWidthColumn>
            <Heading as="h2" fontSize="xl" textAlign="center">
              Experience
            </Heading>
            <Text as="div">
              <Text as="div">
                <Heading as="h3" fontSize="lg">
                  Frontend (Nextjs) & React Native developer
                </Heading>
                Shory, (Cairo, Egypt) Hybrid{' '}
                <Text
                  fontSize="sm"
                  sx={{
                    '@media print': {
                      display: 'inline',
                    },
                  }}
                >
                  (Jan 2023 - present)
                  <TimeSinceHire />
                </Text>
                <Text as="ol" ml="1rem" fontSize="14px">
                  <li>
                    Worked on Shory Motors app {WHERE}I refactored code for
                    better performance and readability
                  </li>
                  <li> Added features using React, Redux, RTK and RTK query</li>
                </Text>
                {/* <Divider /> */}
              </Text>
              <Text as="div">
                <Heading as="h3" fontSize="lg">
                  Frontend (Reactjs) & React Native developer
                </Heading>
                Tech Hive, (Alexandria,Egypt) Remote{' '}
                <Text
                  fontSize="sm"
                  sx={{
                    '@media print': {
                      display: 'inline',
                    },
                  }}
                >
                  (Feb 2022 - Jan 2023){' '}
                </Text>
                <Text as="ol" ml="1rem" fontSize="14px">
                  <li>
                    Implemented Tax calculator module in Zabbat web app (a
                    fintech application) {WHERE}each year has a different
                    calculations than the previous year and each profit segment
                    has a different calculations.
                  </li>
                  <li>
                    Implemented uploading data to server via excel sheet by
                    parsing data in excel using sheet js and transforming it to
                    match Graphql schema and sending to it the server.
                  </li>
                  <li>
                    Designed and Implemented the notification page module in
                    Zabbat using Corejs/React.
                  </li>
                  <li>
                    Devloped Easypass application (A compound security system)
                    with React Native, React Native Paper, Redux, RTK and RTK
                    query.
                  </li>
                </Text>
                {/* <Divider /> */}
              </Text>
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
                  Full stack web developer{' '}
                </Heading>
                Cool code marketing agency, Remote{' '}
                <Text
                  fontSize="sm"
                  sx={{
                    '@media print': {
                      display: 'inline',
                    },
                  }}
                >
                  (Aug 2021 - Nov 2021)
                </Text>
                <Text as="ol" ml="1rem" fontSize="14px">
                  <li>
                    Implemented an app interface for a customer-facing Medical
                    application using react, typescript, and Material Ui
                  </li>
                  <li>
                    Implemented API endpoints and relations between models using
                    Node, Express, and Sequelize.
                  </li>
                </Text>
              </Text>
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
                  Frontend Developer{' '}
                </Heading>
                Freelance, Self Employed{' '}
                <Text
                  display="inline"
                  fontSize="sm"
                  sx={{
                    '@media print': {
                      display: 'inline',
                    },
                  }}
                >
                  (Aug 2019 - Jul 2021)
                </Text>
              </Text>
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
                  Internship Trainee{' '}
                </Heading>
                Information Technology Institute (ITI){' '}
                <Text
                  fontSize="14px"
                  sx={{
                    '@media print': {
                      display: 'inline',
                    },
                  }}
                >
                  (Jul 2019 - Aug 2019){' '}
                </Text>
                <Text fontSize="14px">
                  attended open source development (120 hours) including:
                  HTML-CSS-Javascript-MySQL-Php-Laravel
                </Text>
              </Text>
            </Text>
          </FullWidthColumn>
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
          <FullWidthColumn>
            <Heading as="h2" fontSize="xl" textAlign="center">
              Education
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
                  BS, Computer Science and Statistics{' '}
                </Heading>
                <Text
                  fontSize="14px"
                  sx={{
                    '@media print': {
                      display: 'inline',
                    },
                  }}
                >
                  Alexandria University. (2022)
                </Text>
                {/* <Divider /> */}
              </Text>
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
                  Web development specialization{' '}
                </Heading>
                <Text
                  fontSize="14px"
                  sx={{
                    '@media print': {
                      display: 'inline',
                    },
                  }}
                >
                  University of Michigan via Coursera (2019)
                </Text>
              </Text>
            </Text>
          </FullWidthColumn>
          <FullWidthColumn>
            <Heading as="h2" fontSize="xl" id="skills" textAlign="center">
              Skills
            </Heading>
            <Text as="ol" ml="1rem" fontSize="14px">
              Reactjs • Nextjs & Gatsbyjs • Typescript & Javascript • Graphql &
              REST api • Redux & Redux toolkit • HTML & CSS • Git& GitHub •
              CSS-in-Js & SASS • NodeJs - Express • Prototyping with Framer •
              Graphic design & Photo editing • Googling !
            </Text>
          </FullWidthColumn>
        </VStack>
      </Center>
    </>
  );
}
