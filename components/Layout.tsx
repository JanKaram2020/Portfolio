import React from 'react';
import { Box } from '@chakra-ui/react';
import { AnimateSharedLayout } from 'framer-motion';
import Particles from 'react-particles-js';
import Navigation from './Navigation';
import Footer from './Footer';

const Params = {
  particles: {
    number: {
      value: 50,
    },
    size: {
      value: 3,
    },
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: 'repulse',
      },
    },
  },
};
function Layout({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  return (
    <>
      <Navigation />
      <Particles className="particles" params={Params} />
      <Box
        zIndex="0"
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
