import React from "react";
import FullWidthColumn from "../components/FullWidthColumn";
import Image from "next/image";
import { MdLocationOn, MdPhone, MdOutlineAlternateEmail } from "react-icons/md";
import { RiLinkM } from "react-icons/ri";

const ContactSection = () => (
  <FullWidthColumn>
    <div className="flex flex-row items-center justify-between">
      <div>
        <h1 className="font-bold text-2xl">Jan Karam Aziz Ghaly</h1>
        <h2 className={"text-sky-500 font-bold my-1"}>
          Senior Frontend React & React Native Developer
        </h2>
        <div className="grid print:grid-cols-2 lg:grid-cols-2 gap-x-8">
          <a
            href="tel: +201277440641"
            target="_blank"
            className="hidden print:block"
            rel="noreferrer"
          >
            <MdPhone className={"inline text-sky-500"} />
            &nbsp;+201277440641
          </a>
          <a
            href="mailto: jankaram2020@gmail.com"
            target="_blank"
            rel="noreferrer"
            className={"block"}
          >
            <MdOutlineAlternateEmail className={"inline text-sky-500"} />
            &nbsp;jankaram2020@gmail.com
          </a>
          <a
            href="https://www.jankaram.com/"
            target="_blank"
            className="hidden print:(block)"
            rel="noreferrer"
          >
            <RiLinkM className={"inline text-sky-500"} />
            &nbsp;www.jankaram.com
          </a>
          <p>
            <MdLocationOn className={"inline text-sky-500"} /> Egypt
          </p>
        </div>
      </div>
      <div>
        <Image
          src={"/resume-photo.jpeg"}
          alt={"jan photo"}
          width={500}
          height={500}
          className={
            "rounded-full border-[2px] border-sky-500 size-32 print:size-22 hidden print:block lg:block"
          }
        />
      </div>
    </div>
  </FullWidthColumn>
);

export default ContactSection;
