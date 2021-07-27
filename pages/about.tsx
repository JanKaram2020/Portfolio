import { Box, Center, Flex, Heading, VStack } from '@chakra-ui/react';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';
import JanKaram from '../components/JanKaram';

export default function AboutPage() {
  return (
    <>
      <Center m="10">
        <JanKaram />
      </Center>
    </>
  );
}
