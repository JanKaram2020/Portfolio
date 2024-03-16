import React from "react";
import ProjectPage from "components/ProjectPage";
import { Metadata } from "next";
import Projects from "../Projects";

const title = "test-table";

const project = Projects[title];
export const metadata: Metadata = {
  title: project.Seo.title,
  description: project.Seo.description,
  openGraph: {
    title: project.Seo.title,
    images: "https://www.jankaram.com" + project.Seo.image,
    url: "https://www.jankaram.com/project/" + title,
  },
};
export default function Page() {
  return <ProjectPage {...project} />;
}
