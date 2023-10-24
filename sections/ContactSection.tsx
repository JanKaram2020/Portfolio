import { Flex, Heading, Link, Text } from '@chakra-ui/react';
import React from 'react';

const ContactSection = () => (
  <Flex flexDirection="column" mt="12vh" gridGap="5vh" mx="1vw">
    <h2 className="text-3xl font-bold relative mt-10vh after:(content-empty absolute bottom-0 block h-2px scale-x-0 bg-red-400 transform duration-250 ease-in-out w-95% md:60% lg:w-32%) hover:after:scale-x-100">
      Let's Build Something Together
    </h2>
    <Text fontSize="1.2rem" pt="1rem">
      Feel free to reach out if you're looking for a developer, have a question,
      or just want to connect
    </Text>
    <Link href="mailto: jankaram2020@gmail.com" isExternal>
      jankaram2020@gmail.com
    </Link>
  </Flex>
);
export default ContactSection;
