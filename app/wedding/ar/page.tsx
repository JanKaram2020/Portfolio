import Hero from "../Hero";
import EventDetails from "../EventDetails";
import Invitation from "../Invitation";
import Timeline from "../Timeline";
import { Metadata } from "next";
import CommonLayout from "components/Layout";

export const metadata: Metadata = {
  title: "فرح چان و ليليان",
  description: "انت مدعو لفرح چان و ليليان فرحتنا هتكمل بوجودك. مستنيينك",
  openGraph: {
    title: "فرح چان و ليليان",
    images:
      "https://www.jankaram.com/_next/image?url=%2Fassets%2Fwedding-images%2F2024.png&w=3840&q=75",
    url: "https://www.jankaram.com/wedding/ar",
  },
};

export default function ShowInvite() {
  return (
    <CommonLayout lang={"ar"}>
      <Hero lang={"ar"} />
      <Timeline lang={"ar"} />
      <Invitation lang={"ar"} />
      <EventDetails lang={"ar"} />
    </CommonLayout>
  );
}
