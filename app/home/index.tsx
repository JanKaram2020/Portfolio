import React from "react";
import AboutMeSection from "app/home/sections/AboutMeSection";
import ProjectsSection from "app/home/sections/ProjectsSection";
import SkillsSection from "app/home/sections/SkillsSection";
import ContactSection from "app/home/sections/ContactSection";
import HelloSection from "./sections/HelloSection";

export default function IndexPage(): React.ReactElement {
  return (
    <>
      <HelloSection />
      <AboutMeSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}
