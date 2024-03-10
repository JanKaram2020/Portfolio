import React from 'react';
import ProjectPage from 'components/ProjectPage';
import { MY } from '../../lib/constants';

export default function LilyanneBlog() {
  return (
    <ProjectPage
      Seo={{
        title: 'Writing by Lilyanne | Jan Karam',
        description:
          'Writing by Lilyanne is a JAMstack powered blog made by Jan Karam and built for my Lilyanne.I built this project from scratch with Gatsby, React ,GraphQL, Theme-UI, Framer motion , react-intl and Sanity CMS.',
        image: '/lilyanneMockup.png',
      }}
      title="Writing by Lilyanne"
      subtitle={
        <>
          Writing by Lilyanne is a JAMstack powered blog built for {MY}dear
          friend Lilyanne. <br />I built this project from scratch with Gatsby,
          React ,GraphQL, Theme-UI, Framer motion , react-intl and Sanity CMS.
          <br />
          The blog is available in Arabic , English and French and can be viewed
          in light and dark mode.
        </>
      }
      stack={[
        'Gatsby',
        'React',
        'GraphQL',
        'Theme-UI',
        'Framer motion',
        'react-intl',
        'Sanity CMS',
        'Google analytics',
      ]}
      links={{
        code: [
          {
            name: 'Frontend',
            git: 'https://github.com/JanKaram2020/Lilyanne-blog-gatsby',
          },
          {
            name: 'CMS',
            git: 'https://github.com/JanKaram2020/Lilyanne-blog-cms',
          },
        ],
        live: 'https://lilyannehany.netlify.app/',
      }}
      whyStack={
        <>
          I wanted the website to be multi-lang and I tried a lot of content
          management systems but the only one who supported internalization the
          way I wanted was Sanity CMS. also it's ease of use and customization
          made it the clear winner for me.
          <br /> After choosing the CMS choosing Gatsby was easy, because of
          it's plugin system , how it's easy to make a site multi-lang using it
          and it's amazing integration with Sanity CMS.
          <br />
          Theme-UI was the styling choice because I wanted the blog to support
          dark mode without losing {MY}sanity, it's amazing and supports
          multiple color modes by default. and framer motion because of it's
          amazing performance and ease of use.
          <br />
          Google analytics because I wanted to track engagement and to know
          which article attracts more people.
        </>
      }
      stackInfo={['sanity', 'gatsby', 'themeui', 'framer']}
      lessons={[
        `I could spend all day describing the lessons that I learned while working on this project, but the most important ones involved my new found understanding of Gatsby,GraphQl, Git management, and API integration with Sanity Io and how to use google analytics. As my first large project using React, I learned a lot of lessons regarding code structure and organization.`,
      ]}
      projectImage="/lilyanneMockup.png"
    />
  );
}
