import React from "react";
import AboutMeSection from "home/sections/AboutMeSection";
import ProjectsSection from "home/sections/ProjectsSection";
import SkillsSection from "home/sections/SkillsSection";
import ContactSection from "home/sections/ContactSection";
import HelloSection from "./sections/HelloSection";
import AnimatedNavbar from "home/components/AnimatedNavbar";

export default function IndexPage(): React.ReactElement {
  return (
    <>
      <AnimatedNavbar />
      <main
        className="z-0 mx-20px mb-50px min-h-75vh container mx-auto px-4 md:px-8 print:(p-0! m-0! max-w-full!)"
        id={"main"}
      >
        <HelloSection />
        <AboutMeSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </>
  );
}
