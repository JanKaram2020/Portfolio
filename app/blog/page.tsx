import React from "react";
import getBlogPosts from "./utils/get-blog-posts";

const BlogPage = async () => {
  let allBlogs = await getBlogPosts();
  return (
    <div>
      <pre>{JSON.stringify(allBlogs, null, 2)}</pre>
    </div>
  );
};

export default BlogPage;
