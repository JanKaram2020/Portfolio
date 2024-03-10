import Link from "next/link";
import React from "react";
import Image from "next/legacy/image";

export default function Footer() {
  return (
    <div className="flex items-center justify-center flex-wrap border-t-[0.2rem] print:hidden">
      <div className="flex flex-wrap space-x-10 p-4">
        <Link href="/" legacyBehavior>
          <a className="hover:text-red-400 active:scale-75 cursor-pointer">
            <figure className="dark:invert dark:hover:invert">
              <Image
                alt="Jan Karam logo"
                src="/janfinal.svg"
                width={100}
                height={25}
              />
            </figure>
          </a>
        </Link>
        <Link href="#aboutMe" legacyBehavior>
          <a className="hover:text-red-400 active:scale-75 cursor-pointer">
            About
          </a>
        </Link>
        <Link href="#skills" legacyBehavior>
          <a className="hover:text-red-400 active:scale-75 cursor-pointer">
            Skills
          </a>
        </Link>
        <Link href="#projects" legacyBehavior>
          <a className="hover:text-red-400 active:scale-75 cursor-pointer">
            Projects
          </a>
        </Link>
        <Link href="/resume#header" legacyBehavior>
          <a className="hover:text-red-400 active:scale-75 cursor-pointer">
            Resume
          </a>
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
