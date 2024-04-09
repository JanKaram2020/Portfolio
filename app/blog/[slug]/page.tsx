import { notFound } from "next/navigation";
import { getBlogPosts } from "app/blog/utils";

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
  const { content } = post;
  return (
    <section className={"flex flex-col md:flex-row-reverse gap-6 max-w-full"}>
      {content}
    </section>
  );
}
