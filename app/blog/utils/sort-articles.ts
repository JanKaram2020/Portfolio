const sortArticles = <
  T extends {
    frontMatter: {
      publishedAt: string;
    };
  },
>(
  articles: T[],
) => {
  return articles.sort((a, b) => {
    if (
      new Date(a.frontMatter.publishedAt) > new Date(b.frontMatter.publishedAt)
    ) {
      return -1;
    }
    return 1;
  });
};
export default sortArticles;
