import React from "react";
import Project, { ProjectInterface } from "home/components/Project";

const projects: ProjectInterface[] = [
  {
    image: "/lilyanneMockup.png",
    text: "A responsive PWA multi language blog built with Gatsby Js, Theme UI and Sanity CMS",
    page: "writing-by-lilyanne",
    alt: "Lilyanne Hany's blog screenshot",
    name: "Writing by Lilyanne",
  },
  {
    image: "/test-table.PNG",
    text: "A website to get your test table by course codes or names built with Nextjs, Nextjs's api routes, puppeteer and Mantine",
    page: "test-table",
    alt: "test table screenshot",
    name: "Test table",
  },
  {
    image: "/wouldYouRatherMockup.png",
    text: "Would you rather game built with Reactjs , Redux and Redux-toolkit",
    page: "would-you-rather",
    alt: "Would you rather website screenshot",
    name: "Would you rather",
  },
  {
    image: "/eargasmMockup.png",
    text: "A responsive music website built with React Js, Bootstrap and JSON file as a database",
    page: "eargasm",
    alt: "Page website screenshot",
    name: "Eargasm",
  },
];
const ProjectsSection = () => (
  <>
    <h2
      id="projects"
      className="text-4xl font-bold relative mt-10vh after:(content-empty absolute bottom-0 block h-2px scale-x-0 bg-red-400 transform duration-250 ease-in-out w-100 lg:w-120) hover:after:scale-x-100"
    >
      What I've been working on
    </h2>
    <p className="text-2xl pt">
      I like to stay busy and constantly learn new technologies and use them in
      a project.
      <br /> Take a look at some of the projects I made.
    </p>
    <div className="grid grid-cols-1 lg:grid-cols-2 space-y-10 p-8 gap-[200px] justify-center content-center">
      {projects.map((p) => (
        <Project key={p.name} {...p} />
      ))}
    </div>
  </>
);

export default ProjectsSection;
