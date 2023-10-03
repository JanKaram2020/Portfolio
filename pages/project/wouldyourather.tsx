import React from 'react';
import ProjectPage from '../../components/ProjectPage';

export default function WouldYouRather() {
  return (
    <>
      <ProjectPage
        Seo={{
          description:
            'Would you rather is a React and Redux powered web app built to mimic would you rather game made by Jan Karam.this project is built with React ,Redux, Redux-toolkit , React-strap and Bootstrap for styling.',
          title: 'Would You Rather | Jan Karam',
          image: '/wouldYouRatherMockup.png',
        }}
        title="Would You Rather"
        subtitle={
          <>
            Would you rather is a React and Redux powered web app built to mimic
            would you rather game. <br />I built this project from with React
            ,Redux, Redux-toolkit , React-strap and Bootstrap for styling.
          </>
        }
        stack={['React', 'Redux', 'Bootstrap', 'JSON file as a fake database']}
        links={{
          code: [
            {
              git: 'https://github.com/JanKaram2020/would-you-rather-game',
            },
          ],
          live: 'https://jan-would-you-rather.surge.sh/',
        }}
        whyStack={
          <>
            React was the ui framework for me because my familiarity with it and
            it's amazing react-redux package that binds both well.
            <br /> I chose Redux because I wanted a managed global store and
            predictable state
            <br />
            Boostrap was the styling framework because I wanted to get my hands
            dirty with Redux without focusing too much on styling.
          </>
        }
        stackInfo={['redux', 'bootstrap']}
        lessons={[
          `Never write vanilla Redux again :D , seriously after writing a
        few reduces and actions , I felt that it was complex, hard to
        manage and code was hard to keep track of. then I found
        Redux-toolkit package and I was amazed by the amount of
        boilerplate i removed from the code base and it was amazing.`,
          "Gained more experience with React and it's ecosystem.",
        ]}
        projectImage="/wouldYouRatherMockup.png"
      />
    </>
  );
}
