import Projects, { projectNames, ProjectsKeys } from "../Projects";
import { Metadata } from "next";
import ProjectPage from "../ProjectPage";
import React from "react";
import { notFound } from "next/navigation";

type PageProps = { params: { slug: string } };

export default function Page({ params }: PageProps) {
  const project = Projects[params.slug as ProjectsKeys];
  if (!project) {
    notFound();
  }
  return <ProjectPage {...project} />;
}

export async function generateStaticParams() {
  return projectNames.map((slug) => ({
    slug,
  }));
}

export const generateMetadata = ({ params }: PageProps): Metadata => {
  const project = Projects[params.slug as ProjectsKeys];
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
