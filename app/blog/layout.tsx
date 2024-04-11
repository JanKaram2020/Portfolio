import React, { ReactNode } from "react";
import Link from "next/link";
import getBlogPosts from "./utils/get-blog-posts";
import formatDate from "./utils/format-date";

async function BlogPosts() {
  let allBlogs = await getBlogPosts();

  return allBlogs
    .sort((a, b) => {
      if (
        new Date(a.frontmatter.publishedAt) >
        new Date(b.frontmatter.publishedAt)
      ) {
        return -1;
      }
      return 1;
    })
    .map((post) => (
      <Link
        key={post.slug}
        className="flex flex-col space-y-1 mb-4"
        href={`/blog/${post.slug}`}
      >
        <div className="w-full flex">
          <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
            {formatDate(post.frontmatter.publishedAt, false)}
          </p>
          <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
            {post.frontmatter.title}
          </p>
        </div>
      </Link>
    ));
}
const Layout = async ({ children }: { children: ReactNode }) => {
  return (
    <div
      className={"leading-relaxed flex flex-row gap-4 mt-6 container mx-auto"}
    >
      <div className={"hidden lg:flex w-3/12 flex-col"}>
        <h3 className={"text-2xl mb-5"}>All Blogs</h3>
        {/* @ts-ignore */}
        <BlogPosts />
      </div>
      {children}
    </div>
  );
};

export default Layout;
