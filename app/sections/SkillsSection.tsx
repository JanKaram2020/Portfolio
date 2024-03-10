import ListItem from "components/ListItemColor";
import React from "react";

const SkillsSection = () => (
  <>
    <h2
      id="skills"
      className="text-4xl font-bold relative mt-10vh after:(content-empty absolute bottom-0 block h-2px scale-x-0 bg-red-400 transform duration-250 ease-in-out w-32 lg:w-40) hover:after:scale-x-100"
    >
      My Skills
    </h2>
    <div className="grid pt text-2xl grid-cols-1 md:grid-cols-3 justify-evenly items-center">
      <ul className="list-none">
        <ListItem>Typescript</ListItem>
        <ListItem>Javascript</ListItem>
        <ListItem>React.js</ListItem>
        <ListItem>Next js & Gatsby js</ListItem>
        <ListItem>HTML & CSS</ListItem>
      </ul>
      <ul className="list-none">
        <ListItem>Git & Github</ListItem>
        <ListItem>SCSS</ListItem>
        <ListItem>Bootstrap</ListItem>
        <ListItem>Styled-Components</ListItem>
        <ListItem>Chakra-Ui</ListItem>
      </ul>
      <ul className="list-none">
        <ListItem>Ui design</ListItem>
        <ListItem>Photoshop</ListItem>
        <ListItem>Prototyping</ListItem>
        <ListItem>Graphic design</ListItem>
        <ListItem>Googling :D</ListItem>
      </ul>
    </div>
  </>
);
export default SkillsSection;
