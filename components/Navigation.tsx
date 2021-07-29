import {
  Flex,
  Link as StyledLink,
  Box,
  useColorMode,
  VisuallyHidden,
} from '@chakra-ui/react';
import Link from 'next/link';
import Image from 'next/image';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import React from 'react';
import Example from './ColorModeToggle';

const Navigation = (): React.ReactElement => {
  const { colorMode } = useColorMode();
  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      px="10px"
      gridGap="10px"
      borderBottomWidth="0.2rem"
    >
      <Flex position="relative">
        <Link href="/">
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
                filter: `${
                  colorMode === 'dark' ? 'invert(100%)' : ''
                } hue-rotate(0.8turn)`,
              }}
              _active={{
                transform: 'scale(0.8)',
              }}
            >
              <Image
                alt="Next.js logo"
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
          href="https://www.linkedin.com/in/jankaram2020/"
          isExternal
          rel="noopener"
          _hover={{
            color: 'red.400',
          }}
          _active={{
            transform: 'scale(0.8)',
          }}
        >
          <VisuallyHidden> My Linkedin profile</VisuallyHidden>
          <AiFillLinkedin size={40} />
        </StyledLink>
        <StyledLink
          href="https://github.com/JanKaram2020"
          isExternal
          rel="noopener"
          _hover={{
            color: 'red.400',
          }}
          _active={{
            transform: 'scale(0.8)',
          }}
        >
          <VisuallyHidden> My github profile</VisuallyHidden>
          <AiFillGithub size={40} />
        </StyledLink>
      </Flex>
    </Flex>
  );
};
export default Navigation;
