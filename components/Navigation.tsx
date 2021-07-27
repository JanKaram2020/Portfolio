import { Flex, Link as StyledLink } from '@chakra-ui/react';
import Link from 'next/link';
import Image from 'next/image';

const Navigation = () => (
  <Flex justifyContent="space-between" m="10px">
    <Flex>
      <Image alt="Next.js logo" src="/janfinal.svg" width={100} height={50} />
    </Flex>
    <Flex as="ul" gridGap="10px">
      <Link href="/">
        <StyledLink fontSize={['3xl', '2xl']}>Home page</StyledLink>
      </Link>
      <Link href="/about">
        <StyledLink fontSize={['3xl', '2xl']}>About Page</StyledLink>
      </Link>
    </Flex>
  </Flex>
);
export default Navigation;
