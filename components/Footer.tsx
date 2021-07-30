import {
  Box,
  HStack,
  useColorMode,
  Link as StyledLink,
  Center,
} from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

export default function Footer() {
  const { colorMode } = useColorMode();
  return (
    <Center
      borderTopWidth="0.2rem"
      as="footer"
      sx={{
        '@media print': {
          display: 'none',
        },
      }}
    >
      <HStack spacing={10} p="10px">
        <Link href="/">
          <StyledLink>
            <Box
              as="figure"
              sx={{ filter: colorMode === 'dark' ? 'invert(100%)' : '' }}
              _hover={{
                filter: `${colorMode === 'dark' ? 'invert(100%)' : ''} `,
              }}
            >
              <Image
                alt="Jan Karam logo"
                src="/janfinal.svg"
                width={100}
                height={25}
              />
            </Box>
          </StyledLink>
        </Link>
        <StyledLink href="#aboutMe">About</StyledLink>
        <StyledLink href="#skills">Skills</StyledLink>
        <StyledLink href="#projects">Projects</StyledLink>
        <Link href="/resume">
          <StyledLink>Resume</StyledLink>
        </Link>
        <StyledLink
          href="https://www.linkedin.com/in/jankaram2020/"
          isExternal
          rel="noopener"
        >
          Linkedin
        </StyledLink>
        <StyledLink
          href="https://github.com/JanKaram2020"
          isExternal
          rel="noopener"
        >
          Github
        </StyledLink>
        <StyledLink href="#header">Back to top</StyledLink>
      </HStack>
    </Center>
  );
}
