import React from 'react';
import { Flex, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import AnimatedLogo from '../components/AnimatedLogo';
import AboutMe from '../components/AboutMe';

const AnimatedText = motion(Text);
export default function IndexPage(): React.ReactElement {
  return (
    <>
      <Flex
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        gridGap={['80px', '40px', '30px', '20px']}
        m="5px"
        p="30px"
        height="100vh"
      >
        <AnimatedText
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          as="h1"
          color="red.400"
          fontSize="5xl"
        >
          Hello, I'm
        </AnimatedText>
        <AnimatedLogo />
      </Flex>
      <AboutMe />
    </>
  );
}
