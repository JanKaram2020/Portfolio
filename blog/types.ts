import React from "react";

export type FrontMatter = {
  title: string;
  summary: string;
  publishedAt: `${number}-${number}-${number}`;
  timeToRead: string;
  draft: boolean;
};

export type BlogPost = {
  Content: () => React.JSX.Element;
  frontMatter: FrontMatter;
  tableOfContent: { text: string; level: number; id: string }[];
  slug: string;
};

export type BlogPosts = BlogPost[];
