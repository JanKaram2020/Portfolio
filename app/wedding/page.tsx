import Hero from "./Hero";
import EventDetails from "./EventDetails";
import Invitation from "./Invitation";
import Timeline from "./Timeline";
import { Metadata } from "next";
import CommonLayout from "components/Layout";

export const metadata: Metadata = {
  title: "Jan & Lilyanne's Wedding",
  description:
    "You Are Cordially Invited to Jan & Lilyanne's Wedding. Our joy will be more complete with your presence in our special day. We are looking forward to seeing you.",
  openGraph: {
    title: "Jan & Lilyanne's Wedding",
    images: "https://www.jankaram.com/assets/wedding-images/2024.png",
    url: "https://www.jankaram.com/wedding",
  },
};

export default function ShowInvite() {
  return (
    <CommonLayout lang={"en"}>
      <body>
        <Hero />
        <Timeline />
        <Invitation />
        <EventDetails />
      </body>
    </CommonLayout>
  );
}
