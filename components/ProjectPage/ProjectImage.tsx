import { motion } from 'framer-motion';
import { Center } from '@chakra-ui/react';
import Image from 'next/legacy/image';
import React from 'react';
import type { IImage } from './types';

const MotionCenter = motion(Center);

const ProjectImage = ({ image, title }: { image: IImage; title: string }) => (
  <MotionCenter w="100%" layoutId={image}>
    <Image
      src={image}
      width={900}
      height={380}
      objectFit="cover"
      alt={`screenshots of ${title} on different devices`}
    />
  </MotionCenter>
);
export default ProjectImage;
