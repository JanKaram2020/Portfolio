import { notFound } from "next/navigation";
import getBlogPosts from "app/blog/utils/get-blog-posts";
import React from "react";

export async function generateStaticParams() {
  let posts = await getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}
export default async function Blog({ params }: { params: { slug: string } }) {
  let allPosts = await getBlogPosts();
  const post = allPosts.find((post) => post.slug === params.slug);
  if (!post) {
    notFound();
  }
  return (
    <>
      <div className={"lg:w-7/12 w-12/12 flex flex-col max-w-full"}>
        {post.content}
      </div>
      <div className={"hidden lg:flex w-2/12 flex-col"}>
        Table of content
        <ol
          className={
            "sticky top-10 h-fit pl-3 border-l-1 text-gray-700 dark:text-gray-300"
          }
        >
          {post.tableOfContent.map((c) => {
            return (
              <li className={c.level > 2 ? "pl-3" : ""} key={c.id}>
                <a href={"#" + c.id} className={"hover:text-red-400"}>
                  {c.text}
                </a>
              </li>
            );
          })}
        </ol>
      </div>
    </>
  );
}
