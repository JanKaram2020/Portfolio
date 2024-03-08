import React from 'react';
import {Heading, Text} from "@chakra-ui/react";
import TimeSinceHire from "../components/TimeSinceHire";
import FullWidthColumn from "../components/FullWidthColumn";

const ExperienceSection = () => {
  return (
    <FullWidthColumn>
      <Heading as="h2" fontSize="xl" textAlign="center">
        Experience
      </Heading>
      <Text as="div">
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
            <TimeSinceHire />
          </Text>
          <Text as="ol" ml="1rem" fontSize="14px">
            <li> Added features using React, Redux, RTK and RTK query to our Nextjs apps and React Native apps</li>
            <li> Introduced Unit, Component and Hooks testing with Jest and React-Testing-Library to our DLS</li>
            <li> Implemented the TAMM microservice (Backend For Frontend) using Node and Express with 100% test coverage</li>
          </Text>
        </Text>
        <Text as="div">
          <Heading as="h3" fontSize="lg">
            Frontend (Reactjs) & React Native developer
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
          <Text as="ol" ml="1rem" fontSize="14px">
            <li>
              Developed a complex tax calculator module in Zabbat web app with dynamic calculations based on year and profit segment.
            </li>
            <li>
              Built a data upload module for importing Excel data using SheetJs and transforming it for GraphQL consumption to make it easier to onboard new customers in Zabbat app.
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
          <Text as="ol" ml="1rem" fontSize="14px">
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
            Frontend Developer{' '}
          </Heading>
          Freelance, Self Employed{' '}
          <Text
            display="inline"
            fontSize="sm"
            sx={{
              '@media print': {
                display: 'inline',
              },
            }}
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
            fontSize="14px"
            sx={{
              '@media print': {
                display: 'inline',
              },
            }}
          >
            (Jul 2019 - Aug 2019){' '}
          </Text>
          <Text fontSize="14px">
            attended open source development (120 hours) including:
            <span className={"block print:inline"}> HTML - CSS - Javascript - MySQL - Php - Laravel</span>
          </Text>
        </Text>
      </Text>
    </FullWidthColumn>
  );
};

export default ExperienceSection;
