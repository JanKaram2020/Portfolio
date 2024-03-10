import React from "react";
import FullWidthColumn from "../../../components/FullWidthColumn";
import Section from "../../../components/Section";

const ProjectsSection = () => (
  <FullWidthColumn>
    <h2 className="text-xl font-bold leading-[1.2]" id="projects">
      Projects
    </h2>
    <hr className="print:border print:border-gray-200 my-1" />
    <Section className="flex flex-col gap-2.5">
      <div>
        <div>
          <h3 className="text-lg font-bold print:inline">
            A responsive PWA multi language blog{" "}
          </h3>
          <a
            className="block print-inline"
            href="https://lilyannehany.netlify.app/"
            rel="noopener"
          >
            https://lilyannehany.netlify.app/
          </a>
        </div>
        <p className="text-sm ml-1">
          Stack: React, Gatsby, Graphql, i18next, ThemeUI, and Sanity CMS
        </p>
      </div>
      <div>
        <div>
          <h3 className="text-lg font-bold print:inline">
            Would you rather game{" "}
          </h3>
          <a
            className="block print-inline"
            rel="noopener"
            href="https://jan-would-you-rather.surge.sh"
          >
            https://jan-would-you-rather.surge.sh
          </a>
        </div>
        <p className="text-sm ml-1">
          Stack: React, Redux, Redux-toolkit, React-strap, and Bootstrap for
          styling
        </p>
      </div>
    </Section>
  </FullWidthColumn>
);

export default ProjectsSection;
