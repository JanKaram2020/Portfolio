import type { ReactNode } from "react";
import { Metadata } from "next";
import "@unocss/reset/tailwind.css";
import "base.scss";
import "globals.css";
import Footer from "components/Footer";
import { IBM_Plex_Sans } from "next/font/google";
import CommonLayout from "components/Layout";

export const metadata: Metadata = {
  title: "Jan Karam",
  description:
    "Jan Karam is a web developer , graphic designer , and a life long learner.",
  keywords: [
    "Jan Karam",
    "Jan",
    "Karam",
    "Web developer",
    "Front-end developer",
    "Reactjs",
    "Front-end",
    "Next js",
    "React Native",
    "Front-end Engineer",
    "Senior Front-end Engineer",
    "Senior React Native Engineer",
  ],
  openGraph: {
    title: "Jan Karam",
    images: "https://www.jankaram.com/site.png",
    url: "https://www.jankaram.com/",
  },
};

const IBMPlexSans = IBM_Plex_Sans({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["cyrillic"],
  variable: "--font-plex",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <CommonLayout lang={"en"}>
      <body className={`dark ${IBMPlexSans.variable}`}>
        {children}
        <Footer />
      </body>
    </CommonLayout>
  );
}
