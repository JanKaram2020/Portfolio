import React from "react";
import FullWidthColumn from "../components/FullWidthColumn";
import Image from "next/image";
import { Contact } from "../data";

const ContactSection = () => (
  <FullWidthColumn>
    <div className="flex flex-row items-center justify-between">
      <div>
        <h1 className="font-bold text-2xl">{Contact.name}</h1>
        <h2 className={"text-sky-500 font-bold my-1"}>{Contact.title}</h2>
        <div className="grid print:grid-cols-2 lg:grid-cols-2 gap-x-8">
          {Contact.links.map(({ display, href, icon: Icon, printOnly }) => {
            const Component = href ? "a" : "p";
            const linkProps = {
              href,
              target: "_blank",
              rel: "noreferrer",
            };
            return (
              <Component
                {...(href ? linkProps : {})}
                className={printOnly ? "hidden print:block" : "block"}
                key={href + display}
              >
                <Icon className={"inline text-sky-500"} />
                &nbsp;{display}
              </Component>
            );
          })}
        </div>
      </div>
      <div>
        <Image
          src={Contact.image}
          alt={Contact.name}
          width={300}
          height={300}
          className={
            "rounded-full border-[2px] border-sky-500 size-32 print:size-22 hidden print:block lg:block"
          }
        />
      </div>
    </div>
  </FullWidthColumn>
);

export default ContactSection;
