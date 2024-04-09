import Link from "next/link";
import Image from "next/legacy/image";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { HiDocumentText } from "react-icons/hi";
import React from "react";
import ColorModeToggle from "./ColorModeToggle";

const Navigation = (): React.ReactElement => (
  <header
    id="header"
    className="flex items-center justify-between gap-2.5 border-b-[0.2rem] print:hidden"
  >
    <div className="flex items-center justify-center relative gap-2.5">
      <Link href="/" legacyBehavior>
        <a className="transition-transform duration-250 ease-in-out after:(content-empty absolute top-80% left-[-40px] block w-full h-2px scale-x-0 bg-red-400 hover:scale-x-100)">
          <figure className="dark:(invert hover:invert) hover:(rotate-[-10deg]) active:(scale-80 rotate-[-15deg])">
            <span className="hidden"> website's home page</span>
            <Image
              alt="Jan Karam logo"
              src="/janfinal.svg"
              width={100}
              height={50}
            />
          </figure>
        </a>
      </Link>
      <Link
        title="linkedin profile"
        href="/blog"
        rel="noopener"
        className="hover:(text-red-400 rotate-[5deg]) active:(rotate-[10deg] scale-80) transition duration-100 ease-in-out"
      >
        Blog
      </Link>
    </div>
    <div className="flex gap-2.5">
      <ColorModeToggle />
      <a
        title="linkedin profile"
        href="https://www.linkedin.com/in/jankaram2020/"
        rel="noopener"
        className="hover:(text-red-400 rotate-[5deg]) active:(rotate-[10deg] scale-80) transition duration-100 ease-in-out"
      >
        <span className="hidden"> Jan Karam's Linkedin profile</span>
        <AiFillLinkedin size={40} />
      </a>
      <a
        title="github profile"
        href="https://github.com/JanKaram2020"
        rel="noopener"
        className="hover:(text-red-400 rotate-[10deg]) active:(rotate-[15deg] scale-80) transition duration-100 ease-in-out"
      >
        <span className="hidden"> Jan Karam's Github profile</span>
        <AiFillGithub size={40} />
      </a>
      <Link href="/resume" legacyBehavior>
        <a
          title="resume"
          className="hover:(text-red-400 rotate-[15deg]) active:(rotate-[20deg] scale-80) transition duration-100 ease-in-out"
        >
          <span className="hidden"> Jan Karam's Resume</span>
          <HiDocumentText size={40} />
        </a>
      </Link>
    </div>
  </header>
);
export default Navigation;
