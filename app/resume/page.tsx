import SEO from "components/SEO";
import ContactSection from "app/resume/sections/contact-section";
import SummarySection from "app/resume/sections/summary-section";
import ExperienceSection from "app/resume/sections/experience-section";
import ProjectsSection from "app/resume/sections/projects-section";
import EducationSection from "app/resume/sections/education-section";
import SkillsSection from "app/resume/sections/skills-section";
import PrintButton from "./PrintButton";

export default function ResumePage() {
  return (
    <>
      <SEO title="Resume | Jan Karam" />
      <div className="flex items-center justify-center mt-[5vh] print:(m-0 hidden)">
        <PrintButton />
      </div>
      <div className="flex items-center justify-center">
        <div className="flex flex-col border-[5px] rounded-lg mt-[5vh] max-w-[750px] space-x-2 p-[20px] print:(m-0 p-0 min-w-full border-none bg-white color-black)">
          <ContactSection />
          <SummarySection />
          <ExperienceSection />
          <EducationSection />
          <ProjectsSection />
          <SkillsSection />
        </div>
      </div>
    </>
  );
}
