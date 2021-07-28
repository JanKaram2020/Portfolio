import React from 'react';
import { Box } from '@chakra-ui/react';
import Navigation from './Navigation';

function Layout({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  return (
    <>
      <Navigation />
      <Box as="main" mx="20px" mb="20px">
        {children}
      </Box>
    </>
  );
}
export default Layout;
