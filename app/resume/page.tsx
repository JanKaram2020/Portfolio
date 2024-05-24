import ContactSection from "app/resume/sections/contact-section";
import SummarySection from "app/resume/sections/summary-section";
import ExperienceSection from "app/resume/sections/experience-section";
import ProjectsSection from "app/resume/sections/projects-section";
import EducationSection from "app/resume/sections/education-section";
import SkillsSection from "app/resume/sections/skills-section";
import PrintButton from "./components/PrintButton";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume | Jan Karam",
  openGraph: {
    title: "Resume | Jan Karam",
  },
};
export default function ResumePage() {
  return (
    <>
      <div className="flex items-center justify-center mt-[5vh] print:(m-0 hidden)">
        <PrintButton />
      </div>
      <div className="flex items-center justify-center">
        <div className="flex flex-col border-[5px] rounded-lg mt-[5vh] max-w-[750px] space-y-1 p-[20px] print:(m-0 p-0 min-w-full border-none bg-white color-black)">
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
