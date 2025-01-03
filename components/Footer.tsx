import { Link } from "next-view-transitions";
import React from "react";
import Image from "next/legacy/image";
import getBlogPosts from "blog/utils/get-blog-posts";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { BlogPosts } from "../blog/types";

export default async function NewFooter() {
  let blogs = await getBlogPosts(2);

  return <InnerFooter blogs={blogs} />;
}

const InnerFooter = ({ blogs }: { blogs: BlogPosts }) => {
  return (
    <footer className="bg-gray-100 text-gray-900 py-12 dark:bg-gray-900 dark:text-white print:hidden">
      <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Link
              href="/"
              className="hover:text-red-400 active:scale-75 cursor-pointer pt-4"
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
          </div>
          <nav className="flex flex-col gap-2">
            <Link className="hover:text-red-400" href="/blog">
              Blog
            </Link>
            <Link className="hover:text-red-400" href="/#projects">
              Portfolio
            </Link>
            <Link className="hover:text-red-400" href="/#aboutMe">
              About
            </Link>
            <Link className="hover:text-red-400" href="/resume">
              Resume
            </Link>
          </nav>
        </div>
        <div className="space-y-4">
          <h4 className="text-lg font-semibold">Social</h4>
          <div className="flex flex-col items-start gap-2">
            <a
              className="flex items-center hover:text-red-400"
              href="https://github.com/JanKaram2020"
              target="_blank"
            >
              <AiFillGithub className="h-6 w-6 mr-2" />
              <span>GitHub</span>
            </a>
            <a
              className="flex items-center hover:text-red-400"
              href="https://www.linkedin.com/in/jankaram2020/"
              target="_blank"
            >
              <AiFillLinkedin className="h-6 w-6 mr-2" />
              <span>LinkedIn</span>
            </a>
            <a
              href="mailto: jankaram2020@gmail.com"
              className="flex items-center hover:text-red-400"
              target="_blank"
            >
              <MdEmail className="h-6 w-6 mr-2" />
              <span>Jankaram2020@gmail.com</span>
            </a>
          </div>
        </div>
        <div className="space-y-4">
          <h4 className="text-lg font-semibold">Latest Blogs</h4>
          <div className="space-y-2">
            {blogs.map((blog) => (
              <Link
                className="hover:text-red-400"
                href={"/blog/" + blog.slug}
                key={blog.slug}
              >
                <h5 className="font-medium">{blog.frontMatter.title}</h5>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {blog.frontMatter.summary}
                </p>
              </Link>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Jan K. Ghaly. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
