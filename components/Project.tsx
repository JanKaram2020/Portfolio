import {
  Box,
  Text,
  Link as StyledLink,
  useColorMode,
  Heading,
} from '@chakra-ui/react';
import Image from 'next/legacy/image';
import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const AnimatedLink = motion(StyledLink);
const AnimatedBox = motion(Box);
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
    <motion.div
      className="flex flex-col items-center content-center gap-10px max-w-800px mt-4"
      ref={ref}
      initial="hidden"
      animate={controls}
      whileHover="hover"
      transition={{ delay: 0.3, duration: 0.3 }}
      variants={{
        visible: { x: 0, opacity: 1 },
        hidden: { x: -200, opacity: 0 },
      }}
    >
      <AnimatedBox
        layoutId={image}
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
          height="380"
          width="900"
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
        <Link href={`project/${page}`} legacyBehavior>
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
    </motion.div>
  );
};
export default Project;
