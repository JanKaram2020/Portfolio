import React from 'react';
import {
  Heading,
  SimpleGrid,
  Link,
  Text,
  VStack,
  Divider,
  Center,
  Box,
} from '@chakra-ui/react';

const TwoColumnGrid = ({ children }: { children: React.ReactNode }) => (
  <SimpleGrid
    columns={{ sm: 1, lg: 2 }}
    sx={{
      '@media print': {
        gridTemplateColumns: '1fr 1fr',
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
            download="JanKaramResume"
            textAlign="center"
            fontSize="2xl"
            fontWeight="bold"
            display="block"
          >
            Download Resume
          </Link>
          or print this page and all extras will be removed from print
        </Text>
      </Center>
      <Center>
        <VStack
          spacing={5}
          divider={<Divider />}
          maxW="700px"
          mt="5vh"
          borderWidth="5px"
          borderRadius="lg"
          p="20px"
          sx={{
            '@media print': {
              m: 0,
              minWidth: '100%',
            },
          }}
        >
          <TwoColumnGrid>
            <Box>
              <Heading
                as="h1"
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
              <Heading as="h2" fontSize="xl">
                Contact
              </Heading>
            </Box>
            <Text>
              <Link href="mailto: jankaram2020@gmail.com" external>
                jankaram2020@gmail.com
              </Link>
              <br />
              <Link href="tel: +201277440641" external>
                (+2) 012 77 44 0641{' '}
              </Link>
              <br />
              <Link href="https://www.linkedin.com/in/jankaram2020/" external>
                Linked in
              </Link>
              <br />
              <Link href="https://github.com/JanKaram2020" external>
                Github
              </Link>
            </Text>
          </TwoColumnGrid>
          <TwoColumnGrid>
            <Heading as="h2" fontSize="xl" id="aboutMe">
              Professional Summary
            </Heading>
            <Text>
              Meticulous web developer trained in HTML5, CSS3, Javascript and
              React js with over 2 years of frontend experience and passion for
              responsive website design and a firm believer in the mobile-first
              approach.
            </Text>
          </TwoColumnGrid>
          <TwoColumnGrid>
            <Heading as="h2" fontSize="xl">
              Experience
            </Heading>
            <Text>
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
                <Text fontSize="sm">Jul 2019 - Aug 2019 (2 months)</Text>
                attended open source development (120 hours) including:-
                <Text as="ol" ml="1rem">
                  <li>Web development basics with HTML and CSS (12 hours)</li>
                  <li>JavaScript programming (24 hours)</li>
                  <li>MySQL (18 hours)</li>
                  <li>Apache Web Server (6 hours)</li>
                  <li>PHP programming language (30 hours) </li>
                  <li>Laravel framework (30 hours)</li>
                </Text>
              </Text>
            </Text>
          </TwoColumnGrid>
          <TwoColumnGrid>
            <Heading as="h2" fontSize="xl" id="projects">
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
              <Text>
                <Heading as="h3" fontSize="md">
                  Stack
                </Heading>
                <Text as="ol" ml="1rem">
                  <li>Gatsby Js and React for Ui development.</li>
                  <li>i18next for internalization.</li>
                  <li>Theme Ui for light & dark mode and styling.</li>
                  <li>Sanity CMS for content management.</li>
                </Text>
              </Text>
              <Text>
                <Heading as="h3" fontSize="md">
                  Lighthouse score
                </Heading>
                <Text as="ol" ml="1rem">
                  <li>100/100 Performance.</li>
                  <li>97/100 Accessibility.</li>
                  <li>100/100 Best Practices.</li>
                  <li>100/100 SEO.</li>
                </Text>
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
              <Text>
                <Heading as="h3" fontSize="md">
                  Stack
                </Heading>
                <Text as="ol" ml="1rem">
                  <li>React for Ui development.</li>
                  <li>Redux and Redux-toolkit for state management.</li>
                  <li>Bootstrap and React-strap for styling.</li>
                  <li>JSON file as a database.</li>
                </Text>
              </Text>
              <Text>
                <Heading as="h3" fontSize="md">
                  Lighthouse score
                </Heading>
                <Text as="ol" ml="1rem">
                  <li>93/100 Performance.</li>
                  <li>96/100 Accessibility.</li>
                  <li>100/100 Best Practices.</li>
                  <li>91/100 SEO.</li>
                </Text>
              </Text>
              <Divider />
              <Text>
                <Heading as="h3" fontSize="lg">
                  Music website
                </Heading>
                <Link
                  isExternal
                  rel="noopener"
                  href="https://eargasm.surge.sh/"
                >
                  https://eargasm.surge.sh/
                </Link>
              </Text>
              <Text>
                <Heading as="h3" fontSize="md">
                  Stack
                </Heading>
                <Text as="ol" ml="1rem">
                  <li>React for Ui development.</li>
                  <li>Bootstrap and React-strap for styling.</li>
                  <li>JSON file as a database.</li>
                  <li>Fuse.js for search engine.</li>
                </Text>
              </Text>
              <Text>
                <Heading as="h3" fontSize="md">
                  Lighthouse score
                </Heading>
                <Text as="ol" ml="1rem">
                  <li>93/100 Performance.</li>
                  <li>97/100 Accessibility.</li>
                  <li>93/100 Best Practices.</li>
                  <li>90/100 SEO.</li>
                </Text>
              </Text>
              <Divider />
            </Text>
          </TwoColumnGrid>
          <TwoColumnGrid>
            <Heading as="h2" fontSize="xl">
              Education
            </Heading>
            <Text>
              <Text>
                <Heading as="h3" fontSize="lg">
                  BS, Computer Science and Statistics.
                </Heading>
                Alexandria University.
                <Text fontSize="sm">September 2017 – July 2022</Text>
                <Divider />
              </Text>
              <Text>
                <Heading as="h3" fontSize="lg">
                  Web development specialization
                </Heading>
                University of Michigan via Coursera
                <Text as="ol" ml="1rem">
                  <li>Introduction to HTML5.</li>
                  <li>Introduction to CSS3.</li>
                  <li>Interactivity with JavaScript.</li>
                  <li>Advanced Styling with Responsive Design.</li>
                  <li>Web development specialization capstone </li>
                </Text>
              </Text>
              <Text>
                <Heading as="h3" fontSize="lg">
                  Getting Started with Python
                </Heading>
                University of Michigan via Coursera
              </Text>
            </Text>
          </TwoColumnGrid>
          <TwoColumnGrid>
            <Heading as="h2" fontSize="xl" id="skills">
              Skills
            </Heading>
            <Text as="ol" ml="1rem">
              <li>Typescript & Javascript</li>
              <li>React js</li>
              <li>Redux</li>
              <li>HTML & CSS</li>
              <li>Git & Github</li>
              <li>CSS-in-Js & SASS</li>
              <li>Prototyping with framer</li>
              <li>Googling</li>
            </Text>
          </TwoColumnGrid>
        </VStack>
      </Center>
    </>
  );
}
