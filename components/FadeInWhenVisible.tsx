import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/legacy/image';

export default function FadeInWhenVisible(): React.ReactElement {
  const controls = useAnimation();
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
    <motion.div
      ref={ref}
      animate={controls}
      initial={{ opacity: 0, scale: 0 }}
      transition={{ duration: 0.1 }}
      variants={{
        visible: { opacity: 1, scale: [0, 2, 1] },
        hidden: { opacity: 0, scale: 0 },
        hover: { opacity: 1, scale: 1.2 },
        normal: { opacity: 1, scale: 1 },
      }}
      onHoverStart={async () => {
        await controls.start('hover');
      }}
      onHoverEnd={async () => {
        await controls.start('normal');
      }}
      className="hidden lg:block"
    >
      <figure className="drop-shadow-[0px_0px_12px_#F56565]">
        <Image
          src="/jancropped.jpg"
          height="340"
          width="340"
          className="rounded-full dark:brightness-80"
          alt="Jan Karam smiling"
        />
      </figure>
    </motion.div>
  );
}
