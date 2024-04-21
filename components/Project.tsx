"use client";

import Image from "next/legacy/image";
import { Link } from "next-view-transitions";
import { motion, useAnimation, Variants } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const MotionLink = motion(Link);

const SlashMotion: Variants = {
  hover: { scale: 1.1 },
};
export interface ProjectInterface {
  name: string;
  image: string;
  alt: string;
  text: string;
  page?: string;
  inProgress?: boolean;
}
const Project = ({
  name,
  image,
  text,
  page = "/",
  inProgress,
  alt,
}: ProjectInterface) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      // eslint-disable-next-line no-void
      void controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <motion.div
      className="flex flex-col items-center content-center gap-10px max-w-800px mt-4"
      ref={ref}
      initial="hidden"
      animate={controls}
      whileHover="hover"
      transition={{ delay: 0.3, duration: 0.3 }}
      variants={{
        visible: { x: 0, opacity: 1 },
        hidden: { x: -200, opacity: 0 },
      }}
    >
      <motion.figure layoutId={image} variants={SlashMotion}>
        <Image
          id={image}
          src={image}
          height="380"
          width="900"
          objectFit="cover"
          className="rounded-20px dark:brightness-80"
          alt={alt}
        />
      </motion.figure>
      <h2 className="text-2xl"> {name}</h2>
      <p className="text-gray-500">{text}</p>
      {inProgress ? (
        <p className="text-xl"> In development...</p>
      ) : (
        <MotionLink
          href={`project/${page}`}
          variants={SlashMotion}
          className="text-xl relative hover:decoration-none after:(content-empty absolute block w-28 h-2px bg-red-400)"
        >
          View Project
        </MotionLink>
      )}
    </motion.div>
  );
};
export default Project;
