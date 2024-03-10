"use client";

import { motion } from "framer-motion";
import Image from "next/legacy/image";
import React from "react";
import type { IImage } from "./types";
const ProjectImage = ({ image, title }: { image: IImage; title: string }) => (
  <motion.div className={"w-full"} layoutId={image}>
    <Image
      src={image}
      width={900}
      height={380}
      objectFit="cover"
      alt={`screenshots of ${title} on different devices`}
    />
  </motion.div>
);
export default ProjectImage;
