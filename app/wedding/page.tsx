"use client";
import "./css/animate.css";
import "./css/bootstrap.min.css";
import "./css/default.css";
import "./css/style.css";
import "./css/timeline.css";
import Footer from "./Footer";
import Hero from "./Hero";
import EventDetails from "./EventDetails";
import Invitation from "./Invitation";
import Timeline from "./Timeline";

export default function ShowInvite() {
  return (
    <body>
      <style jsx global>
        {`
          a.react-add-to-calendar__button span {
            cursor: pointer;
            text-decoration: underline;
          }
        `}
      </style>
      <Hero />
      <Timeline />
      <Invitation />
      <EventDetails />
      <Footer />
    </body>
  );
}
