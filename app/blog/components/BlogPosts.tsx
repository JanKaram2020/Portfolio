import getBlogPosts from "../utils/get-blog-posts";
import { Link } from "next-view-transitions";
import formatDate from "../utils/format-date";
import React from "react";

export async function BlogPosts() {
  let allBlogs = await getBlogPosts();

  return allBlogs.map((post) => (
    <Link
      key={post.slug}
      className="flex flex-col space-y-1 mb-4"
      href={`/blog/${post.slug}`}
    >
      <div className="w-full flex flex-col hover:text-red-400">
        <p className="text-neutral-600 dark:text-neutral-400 tabular-nums">
          {formatDate(post.frontMatter.publishedAt, false)}
        </p>
        <p className="text-neutral-900 dark:text-neutral-100 tracking-tight hover:text-red-400">
          {post.frontMatter.title}
        </p>
      </div>
    </Link>
  ));
}
