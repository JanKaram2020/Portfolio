import React from 'react';
import {
  Heading,
  SimpleGrid,
  Link,
  Text,
  VStack,
  Divider,
  Center,
} from '@chakra-ui/react';
import { MdEmail, MdPhone } from 'react-icons/md';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

const TwoColumnGrid = ({ children }: { children: React.ReactNode }) => (
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
      <Center
        mt="5vh"
        sx={{
          '@media print': {
            m: 0,
          },
        }}
      >
        <Text
          sx={{
            '@media print': {
              display: 'none',
            },
          }}
        >
          <Link
            href="/Resume.pdf"
            download="Jan-Karam-Resume.pdf"
            textAlign="center"
            fontSize="2xl"
            fontWeight="bold"
            display="block"
          >
            Download Resume
          </Link>
          or print this page and all extras will be removed from print <br />
          (remember to disable headers and footers)
        </Text>
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
            <SimpleGrid columns={2} gap="5px">
              <Center>
                <MdEmail />
                <Link href="mailto: jankaram2020@gmail.com" external>
                  jankaram2020@gmail.com
                </Link>
              </Center>
              <Center>
                <MdPhone />
                <Link href="tel: +201277440641" external>
                  (+2) 012 77 44 0641{' '}
                </Link>
              </Center>
              <Center>
                <AiFillLinkedin />
                <Link href="https://www.linkedin.com/in/jankaram2020/" external>
                  LinkedIn
                </Link>
              </Center>
              <Center>
                <AiFillGithub />
                <Link href="https://github.com/JanKaram2020" external>
                  Github
                </Link>
              </Center>
            </SimpleGrid>
          </SimpleGrid>
          <TwoColumnGrid>
            <Heading as="h2" fontSize="xl" id="aboutMe" textAlign="center">
              Professional Summary
            </Heading>
            <Text fontSize="14px">
              Meticulous full stack web developer trained in React js, Node js,
              and Express with over 2 years of experience and passion for
              creating web applications.
            </Text>
          </TwoColumnGrid>
          <TwoColumnGrid>
            <Heading as="h2" fontSize="xl" textAlign="center">
              Experience
            </Heading>
            <Text>
              <Text>
                <Heading as="h3" fontSize="lg">
                  Full stack web developer
                </Heading>
                Cool code marketing agency, Remote
                <Text fontSize="sm">Aug 2021 - Nov 2021</Text>
                <Text as="ol" ml="1rem" fontSize="14px">
                  <li>
                    Implemented an app interface for a customer-facing Medical
                    application using react, typescript, and Material Ui
                  </li>
                  <li>
                    developed more than 20+ components reusable components used
                    throughout the app.
                  </li>
                  <li>
                    Implemented API endpoints and relations between models using
                    Node, Express, and Sequelize.
                  </li>
                </Text>
                <Divider />
              </Text>
              <Text>
                <Heading as="h3" fontSize="lg">
                  Frontend Developer
                </Heading>
                Freelance, Self Employed
                <Text fontSize="sm">Aug 2019 - Present (2 years +)</Text>
                <Divider />
              </Text>
              <Text>
                <Heading as="h3" fontSize="lg">
                  Internship Trainee
                </Heading>
                Information Technology Institute (ITI)
                <Text fontSize="14px">Jul 2019 - Aug 2019 (2 months)</Text>
                attended open source development (120 hours) including:-
                <Text as="ol" ml="1rem" fontSize="14px">
                  HTML - CSS - Javascript - MySQL - Php - Laravel
                </Text>
              </Text>
            </Text>
          </TwoColumnGrid>
          <TwoColumnGrid>
            <Heading as="h2" fontSize="xl" id="projects" textAlign="center">
              Projects
            </Heading>
            <Text>
              <Text>
                <Heading as="h3" fontSize="lg">
                  A responsive PWA multi language blog
                </Heading>
                <Link
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
              <Divider />
              <Text>
                <Heading as="h3" fontSize="lg">
                  Would you rather game
                </Heading>
                <Link
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
              <Divider />
            </Text>
          </TwoColumnGrid>
          <TwoColumnGrid>
            <Heading as="h2" fontSize="xl" textAlign="center">
              Education
            </Heading>
            <Text>
              <Text>
                <Heading as="h3" fontSize="lg">
                  BS, Computer Science and Statistics.
                </Heading>
                <Text fontSize="14px">Alexandria University. (2022)</Text>
                <Divider />
              </Text>
              <Text>
                <Heading as="h3" fontSize="lg">
                  Web development specialization
                </Heading>
                <Text fontSize="14px">
                  University of Michigan via Coursera (2019)
                </Text>
              </Text>
            </Text>
          </TwoColumnGrid>
          <TwoColumnGrid>
            <Heading as="h2" fontSize="xl" id="skills" textAlign="center">
              Skills
            </Heading>
            <Text as="ol" ml="1rem" fontSize="14px">
              Nextjs & Gatsby js • Typescript & Javascript • Redux& Redux
              toolkit • HTML & CSS • Git& GitHub • CSS-in-Js& sass • NodeJs -
              Express - Adonisjs • Prototyping with Framer • Graphic design &
              Photo editing • Googling !
            </Text>
          </TwoColumnGrid>
        </VStack>
      </Center>
    </>
  );
}
