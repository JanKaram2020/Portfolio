import { Link } from "next-view-transitions";
import React from "react";
import Image from "next/legacy/image";

export default function Footer() {
  return (
    <div className="flex items-center justify-center flex-wrap border-t-[0.2rem] print:hidden">
      <div className="flex flex-wrap space-x-10 p-4">
        <Link
          href="/"
          className="hover:text-red-400 active:scale-75 cursor-pointer"
        >
          <figure className="dark:invert dark:hover:invert">
            <Image
              alt="Jan Karam logo"
              src="/janfinal.svg"
              width={100}
              height={25}
            />
          </figure>
        </Link>
        <Link
          href="#aboutMe"
          className="hover:text-red-400 active:scale-75 cursor-pointer"
        >
          About
        </Link>
        <Link
          href="#skills"
          className="hover:text-red-400 active:scale-75 cursor-pointer"
        >
          Skills
        </Link>
        <Link
          href="#projects"
          className="hover:text-red-400 active:scale-75 cursor-pointer"
        >
          Projects
        </Link>
        <Link
          href="/resume#header"
          className="hover:text-red-400 active:scale-75 cursor-pointer"
        >
          Resume
        </Link>
        <a
          className="hover:text-red-400 active:scale-75 cursor-pointer"
          href="https://www.linkedin.com/in/jankaram2020/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Linkedin
        </a>
        <a
          className="hover:text-red-400 active:scale-75 cursor-pointer"
          href="https://github.com/JanKaram2020"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
        <a
          className="hover:text-red-400 active:scale-75 cursor-pointer"
          href="#header"
        >
          Back to top
        </a>
      </div>
    </div>
  );
}
