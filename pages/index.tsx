import { ReactElement } from 'react';
import { Flex } from '@chakra-ui/react';
import Logo from '../components/Logo';

const IndexPage = (): ReactElement => (
  <Flex flexDirection="column" gridGap="1rem">
    <Flex alignItems="center" justifyContent="center">
      <Logo width="90vw" />
    </Flex>
  </Flex>
);
export default IndexPage;
