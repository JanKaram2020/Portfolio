import { notFound } from "next/navigation";
import getBlogPosts, { getBlogPostsSlugs } from "blog/utils/get-blog-posts";
import React from "react";
import TableOfContent from "blog/components/TableOfContent";
import { frontMatterId } from "lib/constants";
import DesktopOnlyComponent from "components/DesktopOnlyComponent";
import type { Metadata } from "next";

type Params = { slug: string };

const dateTimeFormatter = (d: string) => {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(d));
};
export default async function Blog({ params }: { params: Params }) {
  const allPosts = await getBlogPosts();
  const post = allPosts.find((post) => post.slug === params.slug);
  if (!post) {
    notFound();
  }
  return (
    <>
      <article
        className={"lg:w-7/12 w-12/12 flex flex-col max-w-full break-words"}
        id={"blog"}
      >
        <div id={frontMatterId} className={"mb-6"}>
          <h1 className={"text-4xl text-red-400 mb-2 capitalize"}>
            {post.frontMatter.title}
          </h1>
          <p>
            {dateTimeFormatter(post.frontMatter.publishedAt)} - &nbsp;
            {post.frontMatter.timeToRead}
          </p>
        </div>
        <post.Content />
      </article>
      <aside className={"hidden lg:flex w-3/12 flex-col"}>
        <DesktopOnlyComponent>
          <TableOfContent tableOfContent={post.tableOfContent} />
        </DesktopOnlyComponent>
      </aside>
    </>
  );
}

export async function generateStaticParams() {
  let posts = await getBlogPostsSlugs();
  return posts.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata | null> {
  const allPosts = await getBlogPosts();
  const post = allPosts.find((post) => post.slug === params.slug);
  if (!post) {
    notFound();
  }
  return {
    title: post.frontMatter.title + " | Jan Karam",
    description: post.frontMatter.summary,
    openGraph: {
      title: post.frontMatter.title + " | Jan Karam",
      images: "https://www.jankaram.com/og-images/" + post.slug + ".png",
      url: "https://www.jankaram.com/blog/" + post.slug,
    },
  };
}
