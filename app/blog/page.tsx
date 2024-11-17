import React from "react";
import getBlogPosts from "./utils/get-blog-posts";
import { Link } from "next-view-transitions";
import { BsArrowRight } from "react-icons/bs";
import formatDate from "./utils/format-date";

const BlogPage = async () => {
  let allBlogs = await getBlogPosts();
  return (
    <div className={"w-12/12 lg:w-10/12"}>
      <h2 className={"text-3xl text-red-400 capitalize"}>Latest blog posts</h2>
      <div className={"flex flex-col gap-6 mt-6"}>
        {allBlogs.map((b) => {
          return (
            <article key={b.slug}>
              <Link href={`/blog/${b.slug}`} className={"hover:text-red-400"}>
                <h3 className={"text-2xl font-bold capitalize"}>
                  {b.frontMatter.title}
                </h3>
              </Link>
              <p>{b.frontMatter.summary}</p>
              <div className="flex flex-row gap-2">
                <p className="text-neutral-600 dark:text-neutral-400 tabular-nums">
                  {formatDate(b.frontMatter.publishedAt, false)}
                </p>
                <p>-</p>
                <p>{b.frontMatter.timeToRead}</p>
              </div>
              <Link
                href={`/blog/${b.slug}`}
                className="text-xl gap-2   hover:underline inline-flex appearance-none items-center justify-center relative whitespace-nowrap align-baseline outline-none outline-offset-2 w-auto leading-normal rounded-md font-bold transition-all duration-100 h-auto min-w-10 text-blue-300 text-center p-0"
              >
                Read it <BsArrowRight />
              </Link>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default BlogPage;
