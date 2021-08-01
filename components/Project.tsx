import {
  Box,
  Flex,
  Text,
  Link as StyledLink,
  useColorMode,
  Heading,
} from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const AnimatedLink = motion(StyledLink);
const AnimatedBox = motion(Box);
const AnimatedFlex = motion(Flex);
const SlashMotion = {
  hover: { scale: 1.1 },
  transition: {
    ease: 'easeInOut',
  },
};
interface ProjectInterface {
  name: string;
  image: string;
  alt: string;
  text: string;
  page?: string;
  inProgress?: boolean;
}
const Project = ({
  name,
  image,
  text,
  page = '/',
  inProgress,
  alt,
}: ProjectInterface) => {
  const { colorMode } = useColorMode();
  const controls = useAnimation();
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-assignment
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      // eslint-disable-next-line no-void
      void controls.start('visible');
    }
  }, [controls, inView]);
  return (
    <AnimatedFlex
      ref={ref}
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      whileHover="hover"
      gridGap="10px"
      initial="hidden"
      animate={controls}
      transition={{ delay: 0.3, duration: 0.3 }}
      variants={{
        visible: { x: 0, opacity: 1 },
        hidden: { x: -200, opacity: 0 },
      }}
      maxWidth="800px"
      mt="1rem"
    >
      <AnimatedBox
        as="figure"
        variants={SlashMotion}
        sx={{
          '.image': {
            borderRadius: '20px',
            filter: colorMode === 'dark' ? 'brightness(80%)' : '',
          },
        }}
      >
        <Image
          src={image}
          height="380px"
          width="900px"
          objectFit="cover"
          className="image"
          alt={alt}
        />
      </AnimatedBox>
      <Heading as="h2" fontSize="2xl">
        {' '}
        {name}
      </Heading>
      <Text color="gray.500">{text}</Text>
      {inProgress ? (
        <Text fontSize="xl"> In development...</Text>
      ) : (
        <Link href={`project/${page}`}>
          <AnimatedLink
            variants={SlashMotion}
            fontSize="xl"
            postion="relative"
            _hover={{ textDecoration: 'none' }}
            _after={{
              content: '""',
              position: 'absolute',
              display: 'block',
              width: '7rem',
              height: '2px',
              background: 'red.400',
            }}
          >
            View Project
          </AnimatedLink>
        </Link>
      )}
    </AnimatedFlex>
  );
};
export default Project;
