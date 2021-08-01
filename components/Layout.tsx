import React from 'react';
import { Box } from '@chakra-ui/react';
import { AnimateSharedLayout } from 'framer-motion';
import Navigation from './Navigation';
import Footer from './Footer';

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
        minHeight="75vh"
        sx={{
          '@media print': {
            m: 0,
          },
        }}
      >
        <AnimateSharedLayout>{children}</AnimateSharedLayout>
      </Box>
      <Footer />
    </>
  );
}
export default Layout;
