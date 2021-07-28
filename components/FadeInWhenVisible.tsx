import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import { Box, useColorMode } from '@chakra-ui/react';

const AnimatedBox = motion(Box);

export default function FadeInWhenVisible({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  const { colorMode } = useColorMode();
  const controls = useAnimation();
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-assignment
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      // eslint-disable-next-line no-void
      void controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <AnimatedBox
      as="figure"
      /* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ delay: 0.3, duration: 0.3 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 },
      }}
      display={['none', 'none', 'block']}
      gridArea="1 / 2 / 2 / 3"
      height="340px"
      width="340px"
      sx={{
        '.image': {
          borderRadius: '50%',
          filter: colorMode === 'dark' ? 'brightness(80%)' : '',
        },
      }}
    >
      {children}
    </AnimatedBox>
  );
}
