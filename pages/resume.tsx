import {
  VStack,
  Divider,
  Button,
} from '@chakra-ui/react';
import SEO from 'components/SEO';
import ContactSection from "../resume-sections/contact-section";
import SummarySection from "../resume-sections/summary-section";
import ExperienceSection from "../resume-sections/experience-section";
import ProjectsSection from "../resume-sections/projects-section";
import EducationSection from "../resume-sections/education-section";
import SkillsSection from "../resume-sections/skills-section";

export default function ResumePage() {
  return (
    <>
      <SEO title="Resume | Jan Karam" />
      <div
        className={'flex items-center justify-center mt-[5vh] print:(m-0 hidden)'}
      >
        <Button
          textAlign="center"
          fontSize="2xl"
          fontWeight="bold"
          colorScheme="blue"
          variant="link"
          onClick={() => window.print()}
        >
          Download Resume
        </Button>
      </div>
      <div className={"flex items-center justify-center"}>
        <VStack
          spacing={2}
          // divider={<Divider />}
          maxW="700px"
          mt="5vh"
          borderWidth="5px"
          borderRadius="lg"
          p="20px"
          sx={{
            '@media print': {
              m: 0,
              p: 0,
              minWidth: '100%',
              border: 'none',
              backgroundColor: 'white',
              color: 'black',
            },
          }}
        >
          <ContactSection />
          <SummarySection />
          <ExperienceSection />
          <EducationSection />
          <ProjectsSection />
          <SkillsSection />
        </VStack>
      </div>
    </>
  );
}
