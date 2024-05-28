import ProjectsData, { projectNames, ProjectsKeys } from "../projects-data";
import { Metadata } from "next";
import ProjectPageComponent from "../components/ProjectPage";
import React from "react";
import { notFound } from "next/navigation";

type PageProps = { params: { slug: string } };

export default function ProjectPage({ params }: PageProps) {
  const project = ProjectsData[params.slug as ProjectsKeys];
  if (!project) {
    notFound();
  }
  return <ProjectPageComponent {...project} />;
}

export async function generateStaticParams() {
  return projectNames.map((slug) => ({
    slug,
  }));
}

export const generateMetadata = ({ params }: PageProps): Metadata => {
  const project = ProjectsData[params.slug as ProjectsKeys];
  if (!project) {
    notFound();
  }
  return {
    title: project.Seo.title,
    description: project.Seo.description,
    openGraph: {
      title: project.Seo.title,
      images: "https://www.jankaram.com" + project.Seo.image,
      url: "https://www.jankaram.com/project/" + project.Seo.title,
    },
  };
};
