import { notFound } from "next/navigation";
import getBlogPosts from "app/blog/utils/get-blog-posts";
import React from "react";
import TableOfContent from "./TableOfContent";
import { TableOfContentProvider } from "./TableOfContentContext";

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
      <div className={"hidden lg:flex w-3/12 flex-col"}>
        <TableOfContentProvider tableOfContent={post.tableOfContent}>
          <TableOfContent tableOfContent={post.tableOfContent} />
        </TableOfContentProvider>
      </div>
    </>
  );
}
