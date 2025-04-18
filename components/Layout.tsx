import type { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
import { ViewTransitions } from "next-view-transitions";
import { GA_TRACKING_ID } from "../lib/constants";
import Analytics from "components/Analytics";

export default function CommonLayout({
  children,
  lang = "en",
  bodyProps,
}: {
  children: ReactNode;
  lang: "ar" | "en";
  bodyProps?: DetailedHTMLProps<
    HTMLAttributes<HTMLBodyElement>,
    HTMLBodyElement
  >;
}) {
  return (
    <ViewTransitions>
      <html lang={lang} dir={lang === "en" ? "ltr" : "rtl"}>
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
        <body {...bodyProps}>
          <Analytics />
          {children}
        </body>
      </html>
    </ViewTransitions>
  );
}
