import Link from 'next/link';
import React from 'react';
import Image from 'next/legacy/image';

const StyledLink = ({
  children,
  ...props
}: {
  children: React.ReactNode;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
  <a className="hover:text-red-400 active:scale-75 cursor-pointer" {...props}>
    {children}
  </a>
);
export default function Footer() {
  return (
    <div className="flex items-center justify-center flex-wrap border-t-[0.2rem] print:hidden">
      <div className="flex flex-wrap space-x-10 p-4">
        <Link href="/" legacyBehavior>
          <StyledLink>
            <figure className="dark:invert dark:hover:invert">
              <Image
                alt="Jan Karam logo"
                src="/janfinal.svg"
                width={100}
                height={25}
              />
            </figure>
          </StyledLink>
        </Link>
        <Link href="#aboutMe" legacyBehavior>
          <StyledLink>About</StyledLink>
        </Link>
        <Link href="#skills" legacyBehavior>
          <StyledLink>Skills</StyledLink>
        </Link>
        <Link href="#projects" legacyBehavior>
          <StyledLink>Projects</StyledLink>
        </Link>
        <Link href="/resume#header" legacyBehavior>
          <StyledLink>Resume</StyledLink>
        </Link>
        <StyledLink
          href="https://www.linkedin.com/in/jankaram2020/"
          target="_blank"
          rel="noopener"
        >
          Linkedin
        </StyledLink>
        <StyledLink
          href="https://github.com/JanKaram2020"
          target="_blank"
          rel="noopener"
        >
          Github
        </StyledLink>
        <StyledLink href="#header">Back to top</StyledLink>
      </div>
    </div>
  );
}
