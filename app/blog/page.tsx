import React from "react";
import getBlogPosts from "./utils/get-blog-posts";

const BlogPage = async () => {
  let allBlogs = await getBlogPosts();
  return (
    <div className={"max-w-full overflow-x-scroll"}>
      <pre>
        {JSON.stringify(
          allBlogs.map((b) => b.frontmatter),
          null,
          2,
        )}
      </pre>
    </div>
  );
};

export default BlogPage;
