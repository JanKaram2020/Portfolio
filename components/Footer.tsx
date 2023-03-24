import {
  Box,
  HStack,
  useColorMode,
  Link as StyledLink,
  Center,
} from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import Image from 'next/legacy/image';

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
      flexWrap="wrap"
    >
      <HStack spacing={10} p="10px" flexWrap="wrap">
        <Link href="/" legacyBehavior>
          <StyledLink
            _hover={{
              color: 'red.400',
            }}
            _active={{
              transform: 'scale(0.8)',
            }}
          >
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
        <Link href="#aboutMe" legacyBehavior>
          <StyledLink
            _hover={{
              color: 'red.400',
            }}
            _active={{
              transform: 'scale(0.8)',
            }}
          >
            About
          </StyledLink>
        </Link>
        <Link href="#skills" legacyBehavior>
          <StyledLink
            _hover={{
              color: 'red.400',
            }}
            _active={{
              transform: 'scale(0.8)',
            }}
          >
            Skills
          </StyledLink>
        </Link>
        <Link href="#projects" legacyBehavior>
          <StyledLink
            _hover={{
              color: 'red.400',
            }}
            _active={{
              transform: 'scale(0.8)',
            }}
          >
            Projects
          </StyledLink>
        </Link>
        <Link href="/resume#header" legacyBehavior>
          <StyledLink
            _hover={{
              color: 'red.400',
            }}
            _active={{
              transform: 'scale(0.8)',
            }}
          >
            Resume
          </StyledLink>
        </Link>
        <StyledLink
          _hover={{
            color: 'red.400',
          }}
          _active={{
            transform: 'scale(0.8)',
          }}
          href="https://www.linkedin.com/in/jankaram2020/"
          isExternal
          rel="noopener"
        >
          Linkedin
        </StyledLink>
        <StyledLink
          _hover={{
            color: 'red.400',
          }}
          _active={{
            transform: 'scale(0.8)',
          }}
          href="https://github.com/JanKaram2020"
          isExternal
          rel="noopener"
        >
          Github
        </StyledLink>
        <StyledLink
          _hover={{
            color: 'red.400',
          }}
          _active={{
            transform: 'scale(0.8)',
          }}
          href="#header"
        >
          Back to top
        </StyledLink>
      </HStack>
    </Center>
  );
}
