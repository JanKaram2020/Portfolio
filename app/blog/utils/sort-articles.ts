const sortArticles = <
  T extends {
    frontmatter: {
      publishedAt: string;
    };
  },
>(
  articles: T[],
) => {
  return articles.sort((a, b) => {
    if (
      new Date(a.frontmatter.publishedAt) > new Date(b.frontmatter.publishedAt)
    ) {
      return -1;
    }
    return 1;
  });
};
export default sortArticles;
