import React from 'react';
import {Heading, Text} from "@chakra-ui/react";
import TimeSinceHire from "../components/TimeSinceHire";
import {WHERE} from "../lib/constants";
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
            <li>
              Worked on Shory Motors app {WHERE}I refactored code for
              better performance and readability
            </li>
            <li> Added features using React, Redux, RTK and RTK query</li>
          </Text>
          {/* <Divider /> */}
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
              Implemented Tax calculator module in Zabbat web app (a
              fintech application) {WHERE}each year has a different
              calculations than the previous year and each profit segment
              has a different calculations.
            </li>
            <li>
              Implemented uploading data to server via excel sheet by
              parsing data in excel using sheet js and transforming it to
              match Graphql schema and sending to it the server.
            </li>
            <li>
              Designed and Implemented the notification page module in
              Zabbat using Corejs/React.
            </li>
            <li>
              Devloped Easypass application (A compound security system)
              with React Native, React Native Paper, Redux, RTK and RTK
              query.
            </li>
          </Text>
          {/* <Divider /> */}
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
              Implemented an app interface for a customer-facing Medical
              application using react, typescript, and Material Ui
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
            HTML-CSS-Javascript-MySQL-Php-Laravel
          </Text>
        </Text>
      </Text>
    </FullWidthColumn>
  );
};

export default ExperienceSection;
