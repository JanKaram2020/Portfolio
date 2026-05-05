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
        <div className={"flex flex-col items-center justify-center gap-6"}>
          <iframe
            className={"mt-16 w-full min-h-[100vh]"}
            src="https://mozio.com/"
            title="Mozio"
          ></iframe>
          <iframe
            className={"mt-16 w-full min-h-[100vh]"}
            src="https://www.mozio.com/v2/en-us/search?start_name=CDG%3A%20Paris%2C%20FR%20-%20Paris%20Charles%20De%20Gaulle%20Airport&end_name=ORY%3A%20Paris%2C%20FR%20-%20Paris%20Orly%20Airport&start_address=CDG&end_address=ORY&pickup_datetime=05%2F31%2F2026%2003%3A51%20PM&mode=one_way&num_passengers=1&currency=USD&return_pickup_datetime=06%2F03%2F2026%2003%3A51%20PM"
            title="Mozio"
          ></iframe>
        </div>
      </main>
    </>
  );
}
