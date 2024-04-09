import { getBlogPosts } from "./utils";

import React from "react";

const BlogPage = async () => {
  let allBlogs = await getBlogPosts();
  return (
    <div>
      <pre>{JSON.stringify(allBlogs, null, 2)}</pre>
    </div>
  );
};

export default BlogPage;
