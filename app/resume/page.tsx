import ContactSection from "app/resume/sections/contact-section";
import SummarySection from "app/resume/sections/summary-section";
import ExperienceSection from "app/resume/sections/experience-section";
import ProjectsSection from "app/resume/sections/projects-section";
import EducationSection from "app/resume/sections/education-section";
import SkillsSection from "app/resume/sections/skills-section";
import PrintSection from "./sections/print-section";
import FindMeSection from "./sections/find-me-section";
import type { Metadata } from "next";
import { resumeId } from "../../lib/constants";

export const metadata: Metadata = {
  title: "Resume | Jan Karam",
  openGraph: {
    title: "Resume | Jan Karam",
  },
};

export default function ResumePage() {
  return (
    <>
      <PrintSection />
      <div className="flex items-center justify-center" id={resumeId}>
        <div className="font-sans flex flex-col border-[5px] rounded-lg mt-[5vh] max-w-[850px] p-[20px] print:(max-w-full m-0 p-0 min-w-full border-none bg-white color-gray-700)">
          <ContactSection />
          <div
            className={"flex flex-col print:flex-row lg:flex-row gap-10 mt-4"}
          >
            <div className={"print:w-8/12 lg:w-8/12 space-y-4"}>
              <ExperienceSection />
              <EducationSection />
            </div>
            <div className={"print:w-4/12 lg:w-4/12 space-y-4"}>
              <SummarySection />
              <SkillsSection />
              <FindMeSection />
              <ProjectsSection />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
