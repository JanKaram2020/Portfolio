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
    <div className="position-relative mobile-timeline">
      <div
        className="bg-dark"
        style={{
          width: "2px",
          marginLeft: "32px",
          left: lang === "en" ? "8px" : undefined,
          right: lang === "ar" ? 40 : undefined,
          top: 0,
          bottom: 0,
          zIndex: 0,
          position: "absolute",
        }}
      ></div>
      <div className={"d-flex flex-column"}>
        {events.map((event, index) => (
          <MobileTimelineItem key={index} event={event} />
        ))}
      </div>
    </div>
  );
}

function MobileTimelineItem({ event }: { event: TimelineEvents[number] }) {
  return (
    <div className="d-flex flex-row mb-5 ps-5">
      <div
        style={{
          marginInline: "10px",
          zIndex: 1,
        }}
      >
        <div
          className="bg-dark text-white rounded-circle d-flex align-items-center justify-content-center"
          style={{ width: 64, height: 64 }}
        >
          {event.year}
        </div>
      </div>
      <div className={"d-flex flex-column align-items-start"}>
        <h5>{event.title}</h5>
        <p
          className="small"
          style={{
            textAlign: a2e(event.year) === event.year ? "left" : "right",
          }}
        >
          {event.description}
        </p>
        <div className="d-flex flex-wrap gap-2 justify-content-end">
          {"loading" in event ? (
            <div
              className="d-flex flex-column justify-content-center align-items-center"
              style={{
                height: "180px",
              }}
            >
              <div
                className="spinner-border text-dark animate__animated animate__fadeInUp"
                role="status"
                style={{ width: "6rem", height: "6rem" }}
              ></div>
            </div>
          ) : (
            <ZoomImage
              Zoomed={
                <Image
                  src={`/assets/wedding-images/${a2e(event.year)}.png`}
                  alt={`${event.title}`}
                  width={1500}
                  height={1500}
                  className="img-fluid shadow-sm grayscale"
                />
              }
            >
              <Image
                src={`/assets/wedding-images/${a2e(event.year)}.png`}
                alt={`${event.title}`}
                width={150}
                height={150}
                className="img-fluid border shadow-sm grayscale"
              />
            </ZoomImage>
          )}
        </div>
      </div>
    </div>
  );
}
