import React from "react";
import ProjectPage from "components/ProjectPage";
import { MY, TABLE } from "../../../lib/constants";

export default function Page() {
  return (
    <ProjectPage
      Seo={{
        description: `Test ${TABLE}is a ${TABLE}generator website built with Nextjs and pupeteer by Jan Karam`,
        title: `Test ${TABLE}| Jan Karam`,
        image: "/test-table.PNG",
      }}
      title={`Test ${TABLE}generator`}
      subtitle={
        <>
          Test {TABLE}generator is a {TABLE}getter website that scrapes the
          faculty of science's test {TABLE}page and displays the results.
          <br />I built this project using Nextjs, Puppeteer and Mantine
          component library.
        </>
      }
      stack={["Next js", "React", "Puppeteer", "Mantine component library"]}
      links={{
        code: [
          {
            git: "https://github.com/JanKaram2020/test-table",
          },
        ],
        live: "https://test-table-jankaram2020.vercel.app/",
      }}
      whyStack={
        <>
          I choose Next-js and React because of the awesome DX and api routes.
          <br />
          Puppeteer because in {MY}opinion it's the best library to web scrape
          using javascript and is used here to scrape the test {TABLE}page and
          get the user's courses by codes or names.
          <br />
          Mantine dev was the component library of choice because of it's
          amazing, beautiful and accessible components.
        </>
      }
      stackInfo={["next", "puppeteer", "mantine"]}
      lessons={[
        "Solved a problem for me and other students and future students",
        "Gained more experience with Puppeteer and Nextjs's api routes.",
        "used mantine dev component library.",
      ]}
      projectImage="/test-table.PNG"
    />
  );
}
