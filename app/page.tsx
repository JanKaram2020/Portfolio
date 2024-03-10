import React from "react";
import AboutMeSection from "app/sections/AboutMeSection";
import SEO from "components/SEO";
import ProjectsSection from "app/sections/ProjectsSection";
import SkillsSection from "app/sections/SkillsSection";
import ContactSection from "app/sections/ContactSection";
import HelloSection from "./sections/HelloSection";

export default function IndexPage(): React.ReactElement {
  return (
    <>
      <SEO />
      <HelloSection />
      <AboutMeSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}
