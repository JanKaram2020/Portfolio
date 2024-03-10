import React from 'react';
import FullWidthColumn from '../components/FullWidthColumn';

const skills = [
  'Expo',
  'Redux Toolkit',
  'RTK query',
  'Tanstack query',
  'Git',
  'GitHub',
  'Tailwind CSS',
  'Chakra UI',
  'Core UI',
  'CSS-in-Js',
  'SCSS',
  'Prisma',
  'Vitest',
  'Prototyping with Framer',
  'Graphic design & Photo editing',
  'Googling !',
];

const SkillsSection = () => (
  <FullWidthColumn>
    <h2 className="text-xl font-bold leading-[1.2]" id="skills">
      Skills
    </h2>
    <hr className="print:border print:border-gray-200 my-1" />
    <ul className="ml-4 text-sm">
      {skills.map((s, i) => (
        <li key={s} className="inline">
          {' '}
          {s} {i + 1 !== skills.length ? '•' : ''}
        </li>
      ))}
    </ul>
  </FullWidthColumn>
);

export default SkillsSection;
