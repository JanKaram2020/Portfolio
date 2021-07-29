import { Box, Flex, Text, Link as StyledLink } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import React from 'react';

const AnimatedLink = motion(StyledLink);
const AnimatedBox = motion(Box);
const AnimatedFlex = motion(Flex);
const SlashMotion = {
  hover: { scale: 1.1 },
  transition: {
    ease: 'easeInOut',
  },
};
const Project = ({
  image,
  text,
  page,
}: {
  image: string;
  text: string;
  page: string;
}) => (
  <AnimatedFlex
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
    whileHover="hover"
    gridGap="10px"
  >
    <AnimatedBox as="figure" variants={SlashMotion}>
      <Image src={image} height="380px" width="900px" objectFit="cover" />
    </AnimatedBox>
    <Text color="gray.500">{text}</Text>
    <Link href={page}>
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
  </AnimatedFlex>
);
export default Project;
