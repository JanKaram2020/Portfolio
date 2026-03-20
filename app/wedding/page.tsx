import Hero from "./Hero";
import EventDetails from "./EventDetails";
import Invitation from "./Invitation";
import Timeline from "./Timeline";
import { Metadata } from "next";
import CommonLayout from "components/Layout";

export const metadata: Metadata = {
  title: "Jan & Lilyanne's Wedding | Our Memories",
  description:
    "Cherishing the memories of Jan & Lilyanne's wedding. Thank you for being part of our special journey.",
  openGraph: {
    title: "Jan & Lilyanne's Wedding | Our Memories",
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
