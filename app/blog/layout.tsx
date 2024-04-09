import React, { ReactNode } from "react";
import { formatDate, getBlogPosts } from "./utils";
import Link from "next/link";

async function BlogPosts() {
  let allBlogs = await getBlogPosts();

  return (
    <div className={"hidden lg:block"}>
      {allBlogs
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
            <div className="w-full">
              <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
                {formatDate(post.frontmatter.publishedAt, false)}
              </p>
              <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                {post.frontmatter.title}
              </p>
            </div>
          </Link>
        ))}
    </div>
  );
}
const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={"leading-relaxed flex flex-row gap-6 mt-6"}>
      {/* @ts-ignore */}
      <BlogPosts />
      {children}
    </div>
  );
};

export default Layout;
