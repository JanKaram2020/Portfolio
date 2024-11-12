import React, { ReactNode } from "react";
import FullWidthColumn from "app/resume/components/FullWidthColumn";
import Section from "app/resume/components/Section";
import SectionHeading from "../components/SectionHeading";
import { AiTwotoneCalendar } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
import LineSeparator from "../components/LineSeparator";
import ListItem from "../components/ListItem";

type JobProps = {
  title: string;
  company: string;
  time: ReactNode;
  location: string;
  points?: string[] | ReactNode;
};

const Job = ({ title, company, time, points, location }: JobProps) => {
  return (
    <div className={"flex flex-col gap-0.2 group"}>
      <h4 className={`text-lg print:text-base capitalize`}>{title}</h4>
      <h5 className="text-sm leading-none font-bold text-sky-500">{company}</h5>
      <p className="text-sm print:inline-flex flex items-center">
        <AiTwotoneCalendar className={"inline"} />
        &nbsp;{time}
        &nbsp;&nbsp;
        <MdLocationOn className={"inline"} />
        &nbsp;{location}
      </p>
      {Array.isArray(points) ? (
        <ol className="text-sm mb-1">
          {points?.map((p) => <ListItem key={p}>{p}</ListItem>)}
        </ol>
      ) : (
        points
      )}
      <LineSeparator />
    </div>
  );
};

const jobs: JobProps[] = [
  {
    title: "Senior Frontend & React Native developer",
    company: "Damas Engineering Consulting (Client Puba Arabia)",
    time: "08/2024 - Present",
    location: "Saudi Arabia - Remote",
    points: [
      "Migrating Bupa app from Outsystems to React Native and Expo",
      "Integrate Zoom-SDK in React Native to have video calls in the app",
      "Add fluid and performant animations using react-native-reanimated",
      "Customize Metro transformer to transform SVGs to react components and CSS files to Stylesheet objects to ease the migration of exising CSS sheets",
      "Mentoring team members learning React, React Native and Expo",
    ],
  },
  {
    title: "Frontend (Nextjs) & React Native developer",
    company: "Shory",
    time: "01/2023 - 08/2024",
    location: "Cairo, Egypt - Hybrid",
    points: [
      "Improved Landing page performance by 55% by using React Server Components and Server Side Rendering which increased SEO",
      "Introduced Unit, Component and Hooks testing with Jest and React-Testing-Library to our DLS, improving code quality and maintainability",
      "Created the TAMM Backend For Frontend using Node and Express with 100% test coverage",
    ],
  },
  {
    title: "Fullstack Web & React Native developer",
    company: "Tech Hive",
    time: "02/2022 - 01/2023",
    location: "Alexandria, Egypt - Remote",
    points: [
      "Developed the ERD drawer frontend in AppAsap using React Flow and sending the result to backend to generate Frontend with React Admin, Backend with Nodejs, Express, Prisma and Passport JS, MySQL database and Expo mobile app",
      "Built a data upload module for importing Excel data using SheetJs and transforming it match GraphQL schema to make it easier to onboard new customers in the Zabbat app.",
      "Developed Easypass application (compound security) app with React Native, Paper, Redux, and RTK.",
    ],
  },
  {
    title: "Fullstack Web developer",
    company: "Cool Code Marketing Agency",
    time: "08/2021 - 02/2022",
    location: "Remote",
    points: [
      "Implemented an app interface for a Medical application using Nextjs, React, Typescript, and MUI",
      "Implemented API endpoints and relations between models using Node, Express, and Sequelize.",
    ],
  },
  {
    title: "Fullstack Web developer",
    company: "Freelance, Self Employed",
    time: "08/2019 - 07/2021",
    location: "Remote",
  },
  {
    title: "Internship Trainee",
    company: "Information Technology Institute (ITI)",
    time: "07/2019 - 08/2019",
    location: "Alexandria, Egypt",
    points: [
      "Web development basics with HTML, CSS and JS (36 hours)",
      "MySQL (18 hours)",
      "Apache Web Server (6 hours)",
      "PHP programming language (30 hours)",
      "Laravel framework (30 hours)",
    ],
  },
];

const ExperienceSection = () => (
  <FullWidthColumn>
    <SectionHeading>Experience</SectionHeading>
    <Section className="flex flex-col space-y-2">
      {jobs.map((j, i) => (
        <Job key={i} {...j} />
      ))}
    </Section>
  </FullWidthColumn>
);

export default ExperienceSection;
