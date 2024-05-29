import { describe, expect, it, vi } from "vitest";
import IndexPage from "app/home";
import ResumePage from "app/resume/page";
import ProjectPage from "../app/project/[slug]/page";
import ProjectsData from "../app/project/projects-data";
import { render } from "@testing-library/react";
import getBlogPosts, {
  getBlogPostsSlugs,
} from "../app/blog/utils/get-blog-posts";
import Blog from "../app/blog/[slug]/page";

vi.mock("next-view-transitions", async () => {
  // const mod = await importOriginal<typeof import("next-view-transitions")>();
  const NextLink = await import("next/link");
  return {
    Link: NextLink,
  };
});
const intersectionObserverMock = () => ({
  observe: () => null,
  unobserve: () => null,
  disconnect: () => null,
});

window.IntersectionObserver = vi
  .fn()
  .mockImplementation(intersectionObserverMock);

describe("blogs posts", () => {
  const slugs = getBlogPostsSlugs();
  slugs.forEach((slug) => {
    it(`should the blog posts ${slug} match the snapshot`, async () => {
      const TheBlogPost = await Blog({ params: { slug } });
      const page = render(TheBlogPost);
      expect(page).toMatchSnapshot();
    });
  });
});

describe("home page", () => {
  it(`should the home page match the snapshot`, async () => {
    const page = render(await IndexPage());
    expect(page).toMatchSnapshot();
  });
});

describe("resume page", () => {
  it(`should the resume page match the snapshot`, async () => {
    const page = render(await ResumePage());
    expect(page).toMatchSnapshot();
  });
});

describe("project pages", () => {
  Object.keys(ProjectsData).map((k) => {
    const key = k as keyof typeof ProjectsData;
    it(`should ${key} page match snapshot`, async () => {
      const page = render(await ProjectPage({ params: { slug: key } }));
      expect(page).toMatchSnapshot();
    });
  });
});
