"use client";
import { Link } from "next-view-transitions";
import Image from "next/legacy/image";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { HiDocumentText } from "react-icons/hi";
import React, { useState } from "react";
import ColorModeToggle from "./ColorModeToggle";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import useLogoPosition from "../hooks/useLogoPosition";
import { usePathname } from "next/navigation";

const Navigation = (): React.ReactElement => {
  const [isHidden, setIsHidden] = useState(false);
  const { scrollY } = useScroll();
  const dimensions = useLogoPosition(true);
  const left = useTransform(
    scrollY,
    [0, 800],
    [dimensions.right, dimensions.left],
  );
  const pathname = usePathname();
  const isHome = pathname === "/";
  useMotionValueEvent(scrollY, "change", (y) => {
    setIsHidden(y < 800);
  });

  return (
    <motion.header
      animate={isHidden ? "hidden" : "visible"}
      whileHover="visible"
      onFocusCapture={() => setIsHidden(false)}
      variants={
        isHome
          ? {
              hidden: {
                y: "-80%",
              },
              visible: {
                y: "0%",
              },
            }
          : undefined
      }
      transition={{ duration: 0.2 }}
      className={
        "print:hidden flex w-full justify-center pt-3" +
        (isHome
          ? " fixed top-0 z-10 bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white"
          : " border-b-[0.2rem]")
      }
      id="header"
    >
      <div
        className={
          "container mx-auto px-4 md:px-8 flex items-center justify-between gap-2.5"
        }
      >
        <div className="flex items-center justify-center relative gap-2.5">
          <Link
            href="/"
            className={
              isHome
                ? "opacity-0 pointer-events-none"
                : "transition-transform duration-250 ease-in-out after:(content-empty absolute top-80% left-[-20px] block w-full h-2px scale-x-0 bg-red-400 hover:scale-x-70)"
            }
            id={"original-link"}
          >
            <figure className="dark:(invert hover:invert) hover:(rotate-[-10deg]) active:(scale-80 rotate-[-15deg])">
              <span className="hidden"> website's home page</span>
              <Image
                alt="Jan Karam logo"
                src="/janfinal.svg"
                width={100}
                height={50}
              />
            </figure>
          </Link>
          {isHome ? (
            <motion.div
              className={"fixed"}
              style={{
                left,
              }}
            >
              <Link
                title="blog"
                href="/blog"
                rel="noopener"
                className="hover:(text-red-400 rotate-[5deg]) active:(rotate-[10deg] scale-80) transition duration-100 ease-in-out"
              >
                Blog
              </Link>
            </motion.div>
          ) : (
            <Link
              title="blog"
              href="/blog"
              rel="noopener"
              className="hover:(text-red-400 rotate-[5deg]) active:(rotate-[10deg] scale-80) transition duration-100 ease-in-out"
            >
              Blog
            </Link>
          )}
        </div>
        <div className="flex gap-2.5">
          <ColorModeToggle />
          <a
            title="linkedin profile"
            href="https://www.linkedin.com/in/jankaram2020/"
            rel="noopener"
            target="_blank"
            className="hover:(text-red-400 rotate-[5deg]) active:(rotate-[10deg] scale-80) transition duration-100 ease-in-out"
          >
            <span className="hidden"> Jan Karam's Linkedin profile</span>
            <AiFillLinkedin size={40} />
          </a>
          <a
            title="github profile"
            href="https://github.com/JanKaram2020"
            rel="noopener"
            target="_blank"
            className="hover:(text-red-400 rotate-[10deg]) active:(rotate-[15deg] scale-80) transition duration-100 ease-in-out"
          >
            <span className="hidden"> Jan Karam's Github profile</span>
            <AiFillGithub size={40} />
          </a>
          <Link
            href="/resume"
            title="resume"
            className="hover:(text-red-400 rotate-[15deg]) active:(rotate-[20deg] scale-80) transition duration-100 ease-in-out"
          >
            <span className="hidden"> Jan Karam's Resume</span>
            <HiDocumentText size={40} />
          </Link>
        </div>
      </div>
    </motion.header>
  );
};
export default Navigation;
