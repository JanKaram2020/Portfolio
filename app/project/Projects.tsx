import React from "react";
import { IProjectPage } from "./ProjectPage/types";

export const projectNames = [
  "eargasm",
  "test-table",
  "writing-by-lilyanne",
  "would-you-rather",
] as const;

export type ProjectsKeys = (typeof projectNames)[number];

const Projects: {
  [k in ProjectsKeys]: IProjectPage;
} = {
  "writing-by-lilyanne": {
    Seo: {
      title: "Writing by Lilyanne | Jan Karam",
      description:
        "Writing by Lilyanne is a JAM-stack powered blog made by Jan Karam and built for my Lilyanne.I built this project from scratch with Gatsby, React ,GraphQL, Theme-UI, Framer motion , react-intl and Sanity CMS.",
      image: "/lilyanneMockup.png",
    },
    title: "Writing by Lilyanne",
    subtitle: (
      <>
        Writing by Lilyanne is a JAMstack powered blog built for my dear friend
        Lilyanne. <br />I built this project from scratch with Gatsby, React
        ,GraphQL, Theme-UI, Framer motion , react-intl and Sanity CMS.
        <br />
        The blog is available in Arabic , English and French and can be viewed
        in light and dark mode.
      </>
    ),
    stack: [
      "Gatsby",
      "React",
      "GraphQL",
      "Theme-UI",
      "Framer motion",
      "react-intl",
      "Sanity CMS",
      "Google analytics",
    ],
    links: {
      code: [
        {
          name: "Frontend",
          git: "https://github.com/JanKaram2020/Lilyanne-blog-gatsby",
        },
        {
          name: "CMS",
          git: "https://github.com/JanKaram2020/Lilyanne-blog-cms",
        },
      ],
      live: "https://lilyannehany.netlify.app/",
    },
    whyStack: (
      <>
        I wanted the website to be multi-lang and I tried a lot of content
        management systems but the only one who supported internalization the
        way I wanted was Sanity CMS. also it's ease of use and customization
        made it the clear winner for me.
        <br /> After choosing the CMS choosing Gatsby was easy, because of it's
        plugin system , how it's easy to make a site multi-lang using it and
        it's amazing integration with Sanity CMS.
        <br />
        Theme-UI was the styling choice because I wanted the blog to support
        dark mode without losing my sanity, it's amazing and supports multiple
        color modes by default. and framer motion because of it's amazing
        performance and ease of use.
        <br />
        Google analytics because I wanted to track engagement and to know which
        article attracts more people.
      </>
    ),
    stackInfo: ["sanity", "gatsby", "themeui", "framer"],
    lessons: [
      `I could spend all day describing the lessons that I learned while working on this project, but the most important ones involved my new found understanding of Gatsby,GraphQl, Git management, and API integration with Sanity Io and how to use google analytics. As my first large project using React, I learned a lot of lessons regarding code structure and organization.`,
    ],
    projectImage: "/lilyanneMockup.png",
  },
  "would-you-rather": {
    Seo: {
      description:
        "Would you rather is a React and Redux powered web app built to mimic would you rather game made by Jan Karam.this project is built with React ,Redux, Redux-toolkit , React-strap and Bootstrap for styling.",
      title: "Would You Rather | Jan Karam",
      image: "/wouldYouRatherMockup.png",
    },
    title: "Would You Rather",
    subtitle: (
      <>
        Would you rather is a React and Redux powered web app built to mimic
        would you rather game. <br />I built this project from with React
        ,Redux, Redux-toolkit , React-strap and Bootstrap for styling.
      </>
    ),
    stack: ["React", "Redux", "Bootstrap", "JSON file as a fake database"],
    links: {
      code: [
        {
          git: "https://github.com/JanKaram2020/would-you-rather-game",
        },
      ],
      live: "https://jan-would-you-rather.surge.sh/",
    },
    whyStack: (
      <>
        React was the ui framework for me because my familiarity with it and
        it's amazing react-redux package that binds both well.
        <br /> I chose Redux because I wanted a managed global store and
        predictable state
        <br />
        Boostrap was the styling framework because I wanted to get my hands
        dirty with Redux without focusing too much on styling.
      </>
    ),

    stackInfo: ["react", "redux", "bootstrap"],
    lessons: [
      `Never write vanilla Redux again :D , seriously after writing a few reduces and actions , I felt that it was complex, hard to manage and code was hard to keep track of. then I found Redux-toolkit package and I was amazed by the amount of boilerplate i removed from the code base and it was amazing.`,
      "Gained more experience with React and it's ecosystem.",
    ],
    projectImage: "/wouldYouRatherMockup.png",
  },
  "test-table": {
    Seo: {
      description:
        "Test table is a table generator website built with Nextjs and pupeteer by Jan Karam",
      title: "Test Table | Jan Karam",
      image: "/wouldYouRatherMockup.png",
    },
    title: "Test table generator",
    subtitle: (
      <>
        Test table generator is a table getter website that scrapes the faculty
        of science's test table page and displays the results.
        <br />I built this project using Nextjs, Puppeteer and Mantine component
        library.
      </>
    ),
    stack: ["Next js", "React", "Puppeteer", "Mantine component library"],
    links: {
      code: [
        {
          git: "https://github.com/JanKaram2020/test-table",
        },
      ],
      live: "https://test-table-jankaram2020.vercel.app/",
    },
    whyStack: (
      <>
        I choose Next-js and React because of the awesome DX and api routes.
        <br />
        Puppeteer because in my opinion it's the best library to web scrape
        using javascript and is used here to scrape the test table page and get
        the user's courses by codes or names.
        <br />
        Mantine dev was the component library of choice because of it's amazing,
        beautiful and accessible components.
      </>
    ),

    stackInfo: ["next", "puppeteer", "mantine"],
    lessons: [
      "Solved a problem for me and other students and future students",
      "Gained more experience with Puppeteer and Nextjs's api routes.",
      "used mantine dev component library.",
    ],
    projectImage: "/test-table.PNG",
  },
  eargasm: {
    Seo: {
      description: "Eargasm is a music website built with React by Jan Karam",
      title: "Eargasm | Jan Karam",
      image: "/eargasmMockup.png",
    },
    title: "Page",
    subtitle: (
      <>
        Page is a music website built with React.
        <br />I built this project with React and React-strap and Bootstrap for
        styling.
      </>
    ),
    stack: ["React", "Bootstrap", "Fuse.js", "JSON file as a database"],
    links: {
      code: [
        {
          git: "https://github.com/JanKaram2020/eargasm.git",
        },
      ],
      live: "https://eargasm.surge.sh/",
    },
    whyStack: (
      <>
        i choose React because I wanted to get more familiar with and make a
        project on my own instead of following tutorials.
        <br /> Fuse.js was the search option of choice because I didn't want to
        build a full backend for this simple app with it's small database.
        <br />
        Boostrap was the styling framework because I wanted to get more familiar
        with React without focusing too much on styling.
      </>
    ),

    stackInfo: ["react", "bootstrap"],
    lessons: [
      "Gained more experience with React and it's ecosystem.",
      "used fuse js and learned how to make a mini fuzzy search engine.",
    ],
    projectImage: "/eargasmMockup.png",
  },
};

export default Projects;
