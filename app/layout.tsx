import React, { Suspense } from "react";
import "@unocss/reset/tailwind.css";
import "theme/smoothscroll.css";
import "globals.css";
import { Analytics } from "../components/Analytics";
import Layout from "../components/Layout";
import { GA_TRACKING_ID } from "../lib/constants";
import { cookies } from "next/headers";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = cookies();
  const theme = cookieStore.get("theme");

  return (
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
      <body className={theme?.value === "dark" ? "dark" : ""}>
        <Suspense fallback={<></>}>
          <Analytics />
        </Suspense>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
