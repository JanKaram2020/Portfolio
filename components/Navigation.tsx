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
import ColorModeToggle from './ColorModeToggle';

const Navigation = (): React.ReactElement => {
  const { colorMode } = useColorMode();
  return (
    <header
      id="header"
      className="flex items-center justify-between gap-2.5 border-b-[0.2rem] print:hidden"
    >
      <div className="flex items-center justify-center relative gap-2.5">
        <Link href="/" legacyBehavior>
          <a className="after:(content-empty absolute top-80% block w-full h-2px scale-x-0 bg-red-400) hover:after:scale-x-100 transition-transform duration-250 ease-in-out">
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
          </a>
        </Link>
      </div>
      <Flex gridGap="10px">
        <ColorModeToggle />
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
    </header>
  );
};
export default Navigation;
