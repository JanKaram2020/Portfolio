import ListItemColor from 'components/ListItemColor';
import SEO from 'components/SEO';
import { ReactNode } from 'react';
import Technology from './Technology';
import type { IProjectPage } from './types';
import ProjectImage from './ProjectImage';

const UnorderedList = ({ children }: { children: ReactNode }) => (
  <ul className="list-none">{children}</ul>
);
export default function ProjectPage({
  Seo,
  title,
  subtitle,
  stack,
  links,
  whyStack,
  stackInfo,
  lessons,
  projectImage,
}: IProjectPage) {
  return (
    <>
      <SEO {...Seo} />
      <div className={"flex flex-col mt-[30px] gap-[30px] items-start space-y-10"}>
        <h1 className={"text-3xl text-red-400"}>
          {title}
        </h1>
        <p className={"text-lg"}>{subtitle}</p>
        <div className={"w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-[30px] justify-start content-start"}>
          <div className={"flex flex-col"}>
            <h2 className={"font-bold text-lg text-red-400"}>
              Stack
            </h2>
            <UnorderedList>
              {stack.map((t) => (
                <ListItemColor key={t}>{t}</ListItemColor>
              ))}
            </UnorderedList>
          </div>
          <div className={"flex flex-col"}>
            <h2 className={"text-lg text-red-300 font-bold"}>
              Code
            </h2>
            <UnorderedList>
              {links.code.map((c) => (
                <ListItemColor key={c.git}>
                  {c.name ? `${c.name}: ` : ''}
                  <a
                    href={c.git}
                    rel="noopener"
                  >
                    Repository
                  </a>
                </ListItemColor>
              ))}
            </UnorderedList>
          </div>
          <div className={"flex flex-col"}>
            <h2 className={"text-red-300 font-bold text-lg"}>
              Live
            </h2>
            <UnorderedList>
              <ListItemColor>
                <a
                  href={links.live}
                  rel="noopener"
                >
                  View site
                </a>
              </ListItemColor>
            </UnorderedList>
          </div>
        </div>
        <ProjectImage image={projectImage} title={title} />
        <div className={"grid grid-cols-1 lg:grid-cols-2"}>
          <div>
            <h2 className={"text-2xl mb-[30px] text-red-300"}>
              Why this stack?
            </h2>
            <p className={"text-lg"}>{whyStack}</p>
          </div>
          <div className={"flex flex-row md:flex-col items-center content-center flex-wrap gap-[15px] rounded-4 hidden md:flex"}
          >
            {[stackInfo.map((t) => <Technology key={t} tech={t} />)]}
          </div>
        </div>
        <div className={"flex flex-col w-full"}>
          <h2
            className={"text-2xl mb-[30px] text-red-300 text-center"}
          >
            Lessons learned
          </h2>
          <div className={"text-lg max-w-[60ch]"}>
            {lessons.length === 1 ? (
              lessons[0]
            ) : (
              <UnorderedList>
                {lessons.map((l) => (
                  <ListItemColor key={l}>{l}</ListItemColor>
                ))}
              </UnorderedList>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
