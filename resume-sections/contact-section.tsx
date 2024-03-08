import React from 'react';
import {Center, Heading, Link, SimpleGrid} from "@chakra-ui/react";

const ContactSection = () => {
  return (
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

  );
};

export default ContactSection;
