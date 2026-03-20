import React from "react";
import { TimelineEvents } from "./index";
import Image from "next/image";
import ZoomImage from "./ZoomImage";
import { a2e } from "lib/lang";

export default function MobileTimeline({
  events,
  lang,
}: {
  events: TimelineEvents;
  lang: "ar" | "en";
}) {
  return (
    <div className="lg:hidden relative">
      <div
        className="absolute left-8 top-0 bottom-0 w-0.5 bg-amber-100"
        style={{
          left: lang === "en" ? "32px" : "auto",
          right: lang === "ar" ? "32px" : "auto",
        }}
      />
      <div className="flex flex-col gap-12">
        {events.map((event, index) => (
          <MobileTimelineItem key={index} event={event} lang={lang} />
        ))}
      </div>
    </div>
  );
}

function MobileTimelineItem({
  event,
  lang,
}: {
  event: TimelineEvents[number];
  lang: "ar" | "en";
}) {
  const isEn = lang === "en";
  return (
    <div
      className={`flex items-start gap-6 relative z-10 animate__animated animate__fadeInUp ${
        isEn ? "flex-row" : "flex-row-reverse"
      }`}
    >
      <div
        className="flex-shrink-0 w-16 h-16 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold shadow-lg"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        {event.year}
      </div>
      <div
        className={`flex flex-col gap-3 ${
          isEn ? "items-start text-left" : "items-end text-right"
        }`}
      >
        <h5 className="text-2xl font-cursive text-dark">{event.title}</h5>
        <p className="text-gray-600 leading-relaxed">{event.description}</p>
        <div className="relative group w-full max-w-[250px]">
          <ZoomImage
            Zoomed={
              <Image
                src={`/assets/wedding-images/${a2e(event.year)}.png`}
                alt={`${event.title}`}
                width={1200}
                height={1200}
                className="rounded-xl shadow-lg"
              />
            }
          >
            <Image
              src={`/assets/wedding-images/${a2e(event.year)}.png`}
              alt={`${event.title}`}
              width={250}
              height={250}
              className="rounded-xl shadow-md border-4 border-white object-cover"
            />
          </ZoomImage>
        </div>
      </div>
    </div>
  );
}
