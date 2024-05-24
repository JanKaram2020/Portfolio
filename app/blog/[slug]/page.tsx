import { notFound } from "next/navigation";
import getBlogPosts, { getBlogPostsSlugs } from "app/blog/utils/get-blog-posts";
import React from "react";
import TableOfContent from "../components/TableOfContent";
import { frontMatterId } from "lib/constants";
import DesktopOnlyComponent from "app/blog/components/DesktopOnlyComponent";
import { Metadata } from "next";
type PageProps = { params: { slug: string } };

const dateTimeFormatter = (d: string) => {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(d));
};
export default async function Blog({ params }: PageProps) {
  const allPosts = await getBlogPosts();
  const post = allPosts.find((post) => post.slug === params.slug);
  if (!post) {
    notFound();
  }
  return (
    <>
      <article
        className={"lg:w-7/12 w-12/12 flex flex-col max-w-full"}
        id={"blog"}
      >
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

export function generateStaticParams() {
  let posts = getBlogPostsSlugs();
  return posts.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata | null> {
  const allPosts = await getBlogPosts();
  const post = allPosts.find((post) => post.slug === params.slug);
  if (!post) {
    notFound();
  }
  return {
    title: post.frontmatter.title + " | Jan Karam",
    description: post.frontmatter.summary,
    openGraph: {
      title: post.frontmatter.title + " | Jan Karam",
      images: "https://www.jankaram.com" + "/janfinal.svg",
      url: "https://www.jankaram.com/blog/" + post.slug,
    },
  };
}
