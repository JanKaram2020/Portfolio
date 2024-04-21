import React, { Suspense } from "react";
import "@unocss/reset/tailwind.css";
import "base.css";
import "globals.css";
import { Analytics } from "../components/Analytics";
import Layout from "../components/Layout";
import { GA_TRACKING_ID } from "../lib/constants";
import { Metadata } from "next";
import { ViewTransitions } from "next-view-transitions";

export const metadata: Metadata = {
  title: "Jan Karam",
  description:
    "Jan Karam is a web developer , graphic designer , and a life long learner.",
  keywords:
    "Jan Karam , Jan , Karam , Web developer, Front-end developer , Reactjs , Front-end , Next js ",
  openGraph: {
    title: "Jan Karam",
    images: "https://www.jankaram.com/site.png",
    url: "https://www.jankaram.com/",
  },
};
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
        <body className={"dark"}>
          <Suspense fallback={<></>}>
            <Analytics />
          </Suspense>
          <Layout>{children}</Layout>
        </body>
      </html>
    </ViewTransitions>
  );
}
