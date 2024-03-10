import SEO from 'components/SEO';
import ContactSection from '../resume-sections/contact-section';
import SummarySection from '../resume-sections/summary-section';
import ExperienceSection from '../resume-sections/experience-section';
import ProjectsSection from '../resume-sections/projects-section';
import EducationSection from '../resume-sections/education-section';
import SkillsSection from '../resume-sections/skills-section';

export default function ResumePage() {
  return (
    <>
      <SEO title="Resume | Jan Karam" />
      <div className="flex items-center justify-center mt-[5vh] print:(m-0 hidden)">
        <button className="text-2xl hover:underline inline-flex appearance-none items-center justify-center relative whitespace-nowrap align-baseline outline-none outline-offset-2 w-auto leading-normal rounded-md font-bold transition-all duration-100 h-auto min-w-10 text-blue-300 text-center p-0"
                onClick={() => window.print()}
        >
          Download Resume
        </button>
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
