import { Metadata } from "next";
import { ViewTransitions } from "next-view-transitions";
import { IBM_Plex_Sans } from "next/font/google";
import "@unocss/reset/tailwind.css";
import "base.scss";
import "globals.css";
import { GA_TRACKING_ID } from "../lib/constants";
import Footer from "components/Footer";
import Analytics from "components/Analytics";

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
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <head>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
        </head>
        <body className={`dark ${IBMPlexSans.variable}`}>
          <Analytics />
          {children}
          <Footer />
        </body>
      </html>
    </ViewTransitions>
  );
}
