import { JobsArray } from "./types";
import { PiBookOpenTextDuotone } from "react-icons/pi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdLocationOn, MdOutlineAlternateEmail, MdPhone } from "react-icons/md";
import { RiLinkM } from "react-icons/ri";

export const Contact = {
  name: "Jan Karam Aziz Ghaly",
  title: "Senior Frontend React & React Native Developer",
  image: "/resume-photo.jpeg",
  links: [
    {
      display: "+201277440641",
      href: "tel: +201277440641",
      icon: MdPhone,
      printOnly: true,
    },
    {
      display: "jankaram2020@gmail.com",
      href: "mailto: jankaram2020@gmail.com",
      icon: MdOutlineAlternateEmail,
      printOnly: false,
    },
    {
      display: "www.jankaram.com",
      href: "https://www.jankaram.com/",
      icon: RiLinkM,
      printOnly: true,
    },
    {
      display: "Egypt",
      href: undefined,
      icon: MdLocationOn,
      printOnly: false,
    },
  ],
};

export const Experiences: JobsArray = [
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
    location: "Turkey - Remote",
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
    location: "Alexandria, Egypt - Onsite",
    points: [
      "Web development basics with HTML, CSS and JS (36 hours)",
      "MySQL (18 hours)",
      "Apache Web Server (6 hours)",
      "PHP programming language (30 hours)",
      "Laravel framework (30 hours)",
    ],
  },
];

export const Education = [
  {
    name: "BS, Computer Science and Statistics",
    time: "2017 - 2022",
    place: "Alexandria University",
  },
  {
    name: "Web development Specialization",
    time: "2019 - 2021",
    place: "University of Michigan via Coursera",
  },
];

export const Summary =
  "Senior Software Developer with 4+ years of experience in React.js, React Native, NextJs, Node.js, Express, and TypeScript. Passionate about building innovative and performant web and mobile applications.";

export const Skills = [
  "Zustand",
  "Typescript",
  "Jest",
  "React Server Components",
  "Nextjs Pages router",
  "Nextjs App Router",
  "Expo Router",
  "React Navigation",
  "React Router",
  "Expo",
  "React Native Reanimated",
  "Redux Toolkit",
  "RTK query",
  "React Hooks",
  "Tanstack query",
  "Git",
  "Github",
  "Tailwind CSS",
  "Chakra UI",
  "Core UI",
  "CSS-in-JS",
  "SCSS",
  "Prisma",
  "Vitest",
  "Docker",
  "Prototyping with Framer",
  "Figma",
  "Graphic design & Photo Editing",
  "Agile",
  "Googling!",
];

export const FindMe = [
  {
    name: "Blog",
    href: "https://www.jankaram.com/blog",
    icon: PiBookOpenTextDuotone,
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/jankaram2020/",
    icon: FaLinkedinIn,
  },
  {
    name: "GitHub",
    href: "https://www.github.com/jankaram2020/",
    icon: FaGithub,
  },
];

export const Projects = [
  {
    name: "Writing By Lilyanne",
    href: "https://www.jankaram.com/project/writing-by-lilyanne",
    points: [
      "JAMstack powered blog",
      "I built this project from scratch with Gatsby, React, GraphQL, Theme-UI, Framer motion, react-intl and Sanity CMS.",
      "The blog is available in Arabic, English and French and can be viewed in light and dark mode.",
    ],
  },
  {
    name: "Test Table Generator",
    href: "https://www.jankaram.com/project/would-you-rather",
    points: [
      "Table getter website that scrapes the faculty of science's test table page and displays the results.",
      "Built this project using Nextjs, Puppeteer and Mantine component library.",
    ],
  },
];
