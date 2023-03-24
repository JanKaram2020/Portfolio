import {
  Flex,
  Link as StyledLink,
  Box,
  useColorMode,
  VisuallyHidden,
} from '@chakra-ui/react';
import Link from 'next/link';
import Image from 'next/legacy/image';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { HiDocumentText } from 'react-icons/hi';
import React from 'react';
import Example from './ColorModeToggle';

const Navigation = (): React.ReactElement => {
  const { colorMode } = useColorMode();
  return (
    <Flex
      id="header"
      as="header"
      justifyContent="space-between"
      alignItems="center"
      px="10px"
      gridGap="10px"
      borderBottomWidth="0.2rem"
      sx={{
        '@media print': {
          display: 'none',
        },
      }}
    >
      <Flex
        position="relative"
        alignItems="center"
        justifyContent="center"
        gridGap="10px"
      >
        <Link href="/" legacyBehavior>
          <StyledLink
            _after={{
              content: '""',
              position: 'absolute',
              top: '80%',
              display: 'block',
              width: '100%',
              height: '2px',
              transform: 'scaleX(0)',
              background: 'red.400',
              transition: 'transform 250ms ease-in-out',
            }}
            sx={{
              '&:hover': {
                '&:after': {
                  transform: 'scaleX(1)',
                },
              },
            }}
          >
            <Box
              as="figure"
              sx={{ filter: colorMode === 'dark' ? 'invert(100%)' : '' }}
              _hover={{
                filter: `${colorMode === 'dark' ? 'invert(100%)' : ''} `,
                transform: 'rotate(-10deg)',
              }}
              _active={{
                transform: 'rotate(-15deg) scale(0.8)',
              }}
            >
              <VisuallyHidden> website's home page</VisuallyHidden>
              <Image
                alt="Jan Karam logo"
                src="/janfinal.svg"
                width={100}
                height={50}
              />
            </Box>
          </StyledLink>
        </Link>
      </Flex>
      <Flex gridGap="10px">
        <Example />
        <StyledLink
          title="linkedin profile"
          href="https://www.linkedin.com/in/jankaram2020/"
          isExternal
          rel="noopener"
          _hover={{
            color: 'red.400',
            transform: 'rotate(5deg)',
          }}
          _active={{
            transform: 'rotate(10deg) scale(0.8)',
          }}
        >
          <VisuallyHidden> Jan Karam's Linkedin profile</VisuallyHidden>
          <AiFillLinkedin size={40} />
        </StyledLink>
        <StyledLink
          title="github profile"
          href="https://github.com/JanKaram2020"
          isExternal
          rel="noopener"
          _hover={{
            color: 'red.400',
            transform: 'rotate(10deg)',
          }}
          _active={{
            transform: 'rotate(15deg) scale(0.8)',
          }}
        >
          <VisuallyHidden> Jan Karam's Github profile</VisuallyHidden>
          <AiFillGithub size={40} />
        </StyledLink>
        <Link href="/resume" legacyBehavior>
          <StyledLink
            title="resume"
            _hover={{
              color: 'red.400',
              transform: 'rotate(15deg)',
            }}
            _active={{
              transform: 'rotate(20deg) scale(0.8)',
            }}
          >
            <VisuallyHidden> Jan Karam's Resume</VisuallyHidden>
            <HiDocumentText size={40} />
          </StyledLink>
        </Link>
      </Flex>
    </Flex>
  );
};
export default Navigation;
