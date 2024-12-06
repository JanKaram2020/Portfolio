import { describe, expect, it, vi } from "vitest";
import IndexPage from "home";
import ResumePage from "resume/page";
import ProjectPage from "../app/(static-navbar)/project/[slug]/page";
import ProjectsData from "../project/projects-data";
import { render } from "@testing-library/react";

vi.mock("next-view-transitions", async () => {
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

describe.concurrent("project pages", () => {
  Object.keys(ProjectsData).map((k) => {
    const key = k as keyof typeof ProjectsData;
    it(`should ${key} page match snapshot`, async () => {
      const page = render(await ProjectPage({ params: { slug: key } }));
      expect(page).toMatchSnapshot();
    });
  });
});
