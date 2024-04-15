import { notFound } from "next/navigation";
import getBlogPosts from "app/blog/utils/get-blog-posts";
import React from "react";
import TableOfContent from "./TableOfContent";
import { frontMatterId } from "lib/constants";
import DesktopOnlyComponent from "components/DesktopOnlyComponent";

export async function generateStaticParams() {
  let posts = await getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}
const dateTimeFormatter = (d: string) => {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(d));
};
export default async function Blog({ params }: { params: { slug: string } }) {
  const allPosts = await getBlogPosts();
  const post = allPosts.find((post) => post.slug === params.slug);
  if (!post) {
    notFound();
  }
  return (
    <>
      <article className={"lg:w-7/12 w-12/12 flex flex-col max-w-full"}>
        <div id={frontMatterId} className={"mb-6"}>
          <h1 className={"text-4xl text-red-400 mb-2 capitalize"}>
            {post.frontmatter.title}
          </h1>
          <p>
            {dateTimeFormatter(post.frontmatter.publishedAt)} - &nbsp;
            {post.frontmatter.timeToRead}
          </p>
        </div>
        {post.content}
      </article>
      <div className={"hidden lg:flex w-3/12 flex-col"}>
        <DesktopOnlyComponent>
          <TableOfContent tableOfContent={post.tableOfContent} />
        </DesktopOnlyComponent>
      </div>
    </>
  );
}
