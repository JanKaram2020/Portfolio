import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import Navigation from './Navigation';

function Layout({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  return (
    <>
      <Navigation />
      <Box
        as="main"
        mx="20px"
        mb="50px"
        sx={{
          '@media print': {
            m: 0,
          },
        }}
      >
        {children}
      </Box>
    </>
  );
}
export default Layout;
