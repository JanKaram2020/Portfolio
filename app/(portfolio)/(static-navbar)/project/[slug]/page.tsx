import ProjectsData, {
  projectNames,
  ProjectsKeys,
} from "project/projects-data";
import { Metadata } from "next";
import ProjectPageComponent from "project/components/ProjectPage";
import React from "react";
import { notFound } from "next/navigation";

type PageProps = { params: Promise<{ slug: string }> };

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = ProjectsData[slug as ProjectsKeys];
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

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = ProjectsData[slug as ProjectsKeys];
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
