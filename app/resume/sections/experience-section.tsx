import React, { ReactNode } from "react";
import TimeSinceHire from "app/resume/components/TimeSinceHire";
import FullWidthColumn from "app/resume/components/FullWidthColumn";
import Section from "app/resume/components/Section";

type JobProps = {
  title: string;
  company: string;
  time: ReactNode;
  points?: string[] | ReactNode;
};

const Job = ({ title, company, time, points }: JobProps) => {
  const inlineCompanyInPrint = !points;

  return (
    <div>
      <h3
        className={`text-lg font-bold leading-[1.2]${
          inlineCompanyInPrint ? " print:inline" : ""
        }`}
      >
        {title}
        {inlineCompanyInPrint ? " " : ""}
      </h3>
      <span className="text-base leading-none">{company}</span>
      <p className="text-sm print:inline">&nbsp;{time}</p>
      {Array.isArray(points) ? (
        <ol className="ml-8 text-sm list-disc">
          {points?.map((p) => <li key={p}>{p}</li>)}
        </ol>
      ) : (
        points
      )}
    </div>
  );
};

const jobs: JobProps[] = [
  {
    title: "Frontend (Nextjs) & React Native developer",
    company: "Shory, (Cairo, Egypt) Hybrid",
    time: (
      <>
        (Jan 2023 - present)&nbsp;
        <TimeSinceHire />
      </>
    ),
    points: [
      "Added features using React, Redux, RTK and RTK query to our Nextjs apps and React Native apps",
      "Introduced Unit, Component and Hooks testing with Jest and React-Testing-Library to our DLS, improving code quality and maintainability",
      "Created the TAMM Backend For Frontend using Node and Express with 100% test coverage",
    ],
  },
  {
    title: "Fullstack web & React Native developer",
    company: "Tech Hive, (Alexandria,Egypt) Remote",
    time: "(Feb 2022 - Jan 2023)",
    points: [
      "Developed a complex tax calculator module in Zabbat web app with different calculations based on year and profit segment.",
      "Built a data upload module for importing Excel data using SheetJs and transforming it for GraphQL consumption to make it easier to onboard new customers in Zabbat app.",
      "Designed and Implemented the notification page module in Zabbat using Corejs/React with realtime notifications using Firebase and service workers.",
      "Developed Easypass application (compound security) app with React Native, Paper, Redux, and RTK.",
    ],
  },
  {
    title: "Fullstack web developer",
    company: "Cool code marketing agency, Remote",
    time: "(Aug 2021 - Nov 2021)",
    points: [
      "Implemented an app interface for a Medical application using Nextjs, React, Typescript, and MUI",
      "Implemented API endpoints and relations between models using Node, Express, and Sequelize.",
    ],
  },
  {
    title: "Fullstack web developer",
    company: "Freelance, Self Employed",
    time: "(Aug 2019 - Jul 2021)",
  },
  {
    title: "Internship Trainee",
    company: "Information Technology Institute (ITI)",
    time: "(Jul 2019 - Aug 2019)",
    points: (
      <p className="text-sm">
        Open source development track:
        <span className="block print:inline text-sm">
          HTML - CSS - Javascript - MySQL - Php - Laravel
        </span>
      </p>
    ),
  },
];

const ExperienceSection = () => (
  <FullWidthColumn>
    <h2 className="text-xl font-bold leading-[1.2]">Experience</h2>
    <hr className="print:border print:border-gray-200 my-1" />
    <Section className="flex flex-col gap-2.5">
      {jobs.map((j, i) => (
        <Job key={i} {...j} />
      ))}
    </Section>
  </FullWidthColumn>
);

export default ExperienceSection;
