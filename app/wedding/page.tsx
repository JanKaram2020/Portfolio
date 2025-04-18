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
    images:
      "https://www.jankaram.com/_next/image?url=%2Fassets%2Fwedding-images%2F2024.png&w=3840&q=75",
    url: "https://www.jankaram.com/wedding",
  },
};

export default function ShowInvite() {
  return (
    <CommonLayout lang={"en"}>
      <Hero />
      <Timeline />
      <Invitation />
      <EventDetails />
    </CommonLayout>
  );
}
