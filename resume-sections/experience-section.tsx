import React from 'react';
import {Divider, Heading, Text} from "@chakra-ui/react";
import TimeSinceHire from "../components/TimeSinceHire";
import FullWidthColumn from "../components/FullWidthColumn";
import Section from "../components/Section";

const ExperienceSection = () => {
  return (
    <FullWidthColumn>
      <Heading as="h2" fontSize="xl">
        Experience
      </Heading>
      <Divider my={1} sx={{
        '@media print': {
          border: "1px solid rgba(0,0,0,0.2)"
        }
      }}/>
      <Section className={"flex flex-col gap-2.5"}>
        <Text as="div">
          <Heading as="h3" fontSize="lg">
            Frontend (Nextjs) & React Native developer
          </Heading>
          Shory, (Cairo, Egypt) Hybrid{' '}
          <Text
            fontSize="sm"
            sx={{
              '@media print': {
                display: 'inline',
              },
            }}
          >
            (Jan 2023 - present) {" "}
            <TimeSinceHire/>
          </Text>
          <Text as="ol" ml="2rem" fontSize="14px">
            <li> Added features using React, Redux, RTK and RTK query to our Nextjs apps and React Native apps</li>
            <li> Introduced Unit, Component and Hooks testing with Jest and React-Testing-Library to our DLS, improving code quality and maintainability.</li>
            <li> Created the TAMM Backend For Frontend using Node and Express with 100% test scoverage
            </li>
          </Text>
        </Text>
        <Text as="div">
          <Heading as="h3" fontSize="lg">
            Fullstack web & React Native developer
          </Heading>
          Tech Hive, (Alexandria,Egypt) Remote{' '}
          <Text
            fontSize="sm"
            sx={{
              '@media print': {
                display: 'inline',
              },
            }}
          >
            (Feb 2022 - Jan 2023){' '}
          </Text>
          <Text as="ol" ml="2rem" fontSize="14px">
            <li>
              Developed a complex tax calculator module in Zabbat web app with different calculations based on year and
              profit segment.
            </li>
            <li>
              Built a data upload module for importing Excel data using SheetJs and transforming it for GraphQL
              consumption to make it easier to onboard new customers in Zabbat app.
            </li>
            <li>
              Designed and Implemented the notification page module in
              Zabbat using Corejs/React with realtime notifications using Firebase and service workers.
            </li>
            <li>
              Devloped Easypass application (A compound security system)
              with React Native, Paper, Redux, and RTK.
            </li>
          </Text>
        </Text>
        <Text as="div">
          <Heading
            as="h3"
            fontSize="lg"
            sx={{
              '@media print': {
                display: 'inline',
              },
            }}
          >
            Full stack web developer{' '}
          </Heading>
          Cool code marketing agency, Remote{' '}
          <Text
            fontSize="sm"
            sx={{
              '@media print': {
                display: 'inline',
              },
            }}
          >
            (Aug 2021 - Nov 2021)
          </Text>
          <Text as="ol" ml="2rem" fontSize="14px">
            <li>
              Implemented an app interface for a Medical
              application using Nextjs, React, Typescript, and MUI
            </li>
            <li>
              Implemented API endpoints and relations between models using
              Node, Express, and Sequelize.
            </li>
          </Text>
        </Text>
        <Text as="div">
          <Heading
            as="h3"
            fontSize="lg"
            sx={{
              '@media print': {
                display: 'inline',
              },
            }}
          >
            Fullstack web developer{' '}
          </Heading>
          Freelance, Self Employed{' '}
          <Text
            display="inline"
            fontSize="sm"
          >
            (Aug 2019 - Jul 2021)
          </Text>
        </Text>
        <Text as="div">
          <Heading
            as="h3"
            fontSize="lg"
            sx={{
              '@media print': {
                display: 'inline',
              },
            }}
          >
            Internship Trainee{' '}
          </Heading>
          Information Technology Institute (ITI){' '}
          <Text
            display="inline"
            fontSize="sm"
          >
            (Jul 2019 - Aug 2019)
          </Text>
          <Text fontSize="14px" ml={"1rem"}>
            Open source development track:
            <span className={"block print:inline"}> HTML - CSS - Javascript - MySQL - Php - Laravel</span>
          </Text>
        </Text>
      </Section>
    </FullWidthColumn>
  );
};

export default ExperienceSection;
