import React, { ReactNode } from "react";
import { BlogPosts } from "blog/components/BlogPosts";

const Layout = async ({ children }: { children: ReactNode }) => {
  return (
    <div
      className={"leading-relaxed flex flex-row gap-4 mt-6 container mx-auto"}
    >
      <div className={"hidden lg:flex w-2/12 flex-col"}>
        <h3 className={"text-2xl mb-5"}>All Blogs</h3>
        <BlogPosts />
      </div>
      {children}
    </div>
  );
};

export default Layout;
