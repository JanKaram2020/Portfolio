import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import { Box, useColorMode } from '@chakra-ui/react';
import Image from 'next/image';

const AnimatedBox = motion(Box);

export default function FadeInWhenVisible(): React.ReactElement {
  const { colorMode } = useColorMode();
  const controls = useAnimation();
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-assignment
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
    <AnimatedBox
      /* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */
      ref={ref}
      animate={controls}
      initial={{ opacity: 0, scale: 0 }}
      transition={{ delay: 0.3, duration: 0.3 }}
      variants={{
        visible: { opacity: 1, scale: [0, 2, 1] },
        hidden: { opacity: 0, scale: 0 },
      }}
      display={['none', 'none', 'none', 'block']}
      // gridArea="1 / 2 / 2 / 3"
      // maxHeight="340px"
      // maxWidth="340px"
    >
      <Box
        as="figure"
        sx={{
          filter: 'drop-shadow(0px 0px 12px #F56565)',
          '.image': {
            borderRadius: '50%',
            filter: colorMode === 'dark' ? 'brightness(80%)' : '',
          },
        }}
      >
        <Image
          src="/jancropped.jpg"
          height="340px"
          width="340px"
          className="image"
          alt="Jan Karam smiling"
        />
      </Box>
    </AnimatedBox>
  );
}
