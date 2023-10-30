import React from 'react';
import AboutMeSection from 'sections/AboutMeSection';
import SEO from 'components/SEO';
import ProjectsSection from 'sections/ProjectsSection';
import SkillsSection from 'sections/SkillsSection';
import ContactSection from 'sections/ContactSection';
import HelloSection from '../sections/HelloSection';

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
