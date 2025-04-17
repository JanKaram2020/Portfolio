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
    images: "https://www.jankaram.com/assets/wedding-images/2024.png",
    url: "https://www.jankaram.com/wedding/ar",
  },
};

export default function ShowInvite() {
  return (
    <CommonLayout lang={"ar"}>
      <body>
        <Hero lang={"ar"} />
        <Timeline lang={"ar"} />
        <Invitation lang={"ar"} />
        <EventDetails lang={"ar"} />
      </body>
    </CommonLayout>
  );
}
