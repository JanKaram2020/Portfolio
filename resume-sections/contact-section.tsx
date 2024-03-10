import React from 'react';
import FullWidthColumn from '../components/FullWidthColumn';
import Section from "../components/Section";

const ContactSection = () => (
  <FullWidthColumn>
    <h2 className="text-xl font-bold leading-[1.2] print:hidden">Contact</h2>
    <hr className="print:hidden print:border print:border-gray-200 my-1" />
    <Section className="grid gap-[5px] items-center grid-cols-1 md:grid-cols-2 print:grid-cols-[1fr_auto_1fr] w-full print:ml-0">
      <a
        href="tel: +201277440641"
        target="_blank"
        className="hidden print:block"
        rel="noreferrer"
      >
        +201277440641
      </a>
      <h1 className="hidden print:block font-bold text-2xl text-center">
        Jan Karam Aziz Ghaly
      </h1>
      <a
        href="https://www.jankaram.com/"
        target="_blank"
        className="print:text-right"
        rel="noreferrer"
      >
        jankaram.com
      </a>
      <a href="mailto: jankaram2020@gmail.com" target="_blank" rel="noreferrer">
        jankaram2020@gmail.com
      </a>
      <a
        href="https://www.linkedin.com/in/jankaram2020/"
        target="_blank"
        className="print:text-center"
        rel="noreferrer"
      >
        linkedin.com/in/jankaram2020
      </a>
      <a
        href="https://github.com/JanKaram2020"
        target="_blank"
        className="print:text-right"
        rel="noreferrer"
      >
        github.com/jankaram2020
      </a>
    </Section>
  </FullWidthColumn>
);

export default ContactSection;
