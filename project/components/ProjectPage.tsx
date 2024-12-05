import ListItemColor from "components/ListItemColor";
import Technology from "./Technology";
import type { IProjectPage } from "./types";
import ProjectImage from "./ProjectImage";

export default function ProjectPage({
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
      <div
        className={"flex flex-col mt-[30px] gap-[30px] items-start space-y-10"}
      >
        <h1 className={"text-3xl text-red-400"}>{title}</h1>
        <p className={"text-lg"}>{subtitle}</p>
        <div
          className={
            "w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-[30px] justify-start content-start"
          }
        >
          <div className={"flex flex-col"}>
            <h2 className={"font-bold text-lg text-red-400"}>Stack</h2>
            <ul className="list-none">
              {stack.map((t) => (
                <ListItemColor key={t}>{t}</ListItemColor>
              ))}
            </ul>
          </div>
          <div className={"flex flex-col"}>
            <h2 className={"text-lg text-red-300 font-bold"}>Code</h2>
            <ul className="list-none">
              {links.code.map((c) => (
                <ListItemColor key={c.git}>
                  {c.name ? `${c.name}: ` : ""}
                  <a href={c.git} rel="noopener">
                    Repository
                  </a>
                </ListItemColor>
              ))}
            </ul>
          </div>
          <div className={"flex flex-col"}>
            <h2 className={"text-red-300 font-bold text-lg"}>Live</h2>
            <ul className="list-none">
              <ListItemColor>
                <a href={links.live} rel="noopener">
                  View site
                </a>
              </ListItemColor>
            </ul>
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
          <div
            className={
              "flex flex-row md:flex-col items-center content-center flex-wrap gap-[15px] rounded-4 hidden md:flex"
            }
          >
            {[stackInfo.map((t) => <Technology key={t} tech={t} />)]}
          </div>
        </div>
        <div className={"flex flex-col w-full"}>
          <h2 className={"text-2xl mb-[30px] text-red-300 text-center"}>
            Lessons learned
          </h2>
          <div className={"text-lg max-w-[60ch]"}>
            {lessons.length === 1 ? (
              lessons[0]
            ) : (
              <ul className="list-none">
                {lessons.map((l) => (
                  <ListItemColor key={l}>{l}</ListItemColor>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
