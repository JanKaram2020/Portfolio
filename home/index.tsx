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
            className={"mt-16"}
            src="https://front-end-staging.mozio.com/"
            title="Mozio"
          ></iframe>
          <iframe
            src="https://front-end-staging.mozio.com/v2/en-us/search?start_name=CDG%3A%20Paris%2C%20FR%20-%20Charles%20De%20Gaulle&end_name=ORY%3A%20Paris%2C%20FR%20-%20Paris%20Orly&start_address=CDG%3A%20Paris%2C%20FR%20-%20Charles%20De%20Gaulle&end_address=ORY%3A%20Paris%2C%20FR%20-%20Paris%20Orly&pickup_datetime=05%2F30%2F2026%2012%3A00%20AM&mode=one_way&num_passengers=1&currency=USD&return_pickup_datetime=12%2F09%2F2025%2005%3A58%20PM"
            title="Mozio"
          ></iframe>
          <iframe
            src="https://front-end-staging.mozio.com/en-us/search?start_name=CDG%3A+Paris%2C+FR+-+Charles+De+Gaulle&end_name=ORY%3A+Paris%2C+FR+-+Paris+Orly&start_address=CDG&end_address=ORY&pickup_datetime=05%2F30%2F2026+12%3A00+AM&mode=one_way&num_passengers=1&currency=USD&return_pickup_datetime=06%2F08%2F2026+12%3A00+AM&ta=1"
            title="Mozio"
          ></iframe>
        </div>
      </main>
    </>
  );
}
