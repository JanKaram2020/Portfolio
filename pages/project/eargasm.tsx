import React from 'react';
import ProjectPage from 'components/ProjectPage';

export default function Eargasm() {
  return (
    <ProjectPage
      Seo={{
        description: 'Eargasm is a music website built with React by Jan Karam',
        title: 'Eargasm | Jan Karam',
        image: '/eargasmMockup.png',
      }}
      title="Eargasm"
      subtitle={
        <>
          Eargasm is a music website built with React.
          <br />I built this project with React and React-strap and Bootstrap
          for styling.
        </>
      }
      stack={['React', 'Bootstrap', 'Fuse.js', 'JSON file as a database']}
      links={{
        code: [
          {
            git: 'https://github.com/JanKaram2020/eargasm.git',
          },
        ],
        live: 'https://eargasm.surge.sh/',
      }}
      whyStack={
        <>
          i choose React because I wanted to get more familiar with and make a
          project on my own instead of following tutorials.
          <br /> Fuse.js was the search option of choice because I didn't want
          to build a full backend for this simple app with it's small database.
          <br />
          Boostrap was the styling framework because I wanted to get my more
          familiar with React without focusing too much on styling.
        </>
      }
      stackInfo={['react', 'bootstrap']}
      lessons={[
        "Gained more experience with React and it's ecosystem.",
        'used fuse js and learned how to make a mini fuzzy search engine.',
      ]}
      projectImage="/eargasmMockup.png"
    />
  );
}
