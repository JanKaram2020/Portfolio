import type { ReactNode } from "react";
import { ViewTransitions } from "next-view-transitions";
import { GA_TRACKING_ID } from "../lib/constants";
import Analytics from "components/Analytics";

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
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
        <>
          <Analytics />
          {children}
        </>
      </html>
    </ViewTransitions>
  );
}
