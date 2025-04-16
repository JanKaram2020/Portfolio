import Zoom from "react-medium-image-zoom";
import Image from "next/image";
import React from "react";
import { TimelineEvent } from "./index";

function MobileTimelineItem({ event }: { event: TimelineEvent }) {
  return (
    <div className="d-flex mb-5 ps-5">
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
      <div>
        <h5>{event.title}</h5>
        <p className="small">{event.description}</p>
        <div className="d-flex flex-wrap gap-2">
          {event.loading ? (
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
            <Zoom
              zoomImg={{
                width: 1500,
                height: 1500,
              }}
            >
              <img
                src={`/assets/wedding-images/${event.year}.png`}
                alt={`${event.title}`}
                width={150}
                height={150}
                className="img-fluid border shadow-sm grayscale"
              />
            </Zoom>
          )}
        </div>
      </div>
    </div>
  );
}

export default function MobileTimeline({
  events,
}: {
  events: TimelineEvent[];
}) {
  return (
    <div className="position-relative">
      <div
        className="position-absolute start-0 top-0 bottom-0 bg-dark"
        style={{
          width: "2px",
          marginLeft: "32px",
          left: "8px",
          top: 0,
          bottom: 0,
          zIndex: 0,
        }}
      ></div>

      {events.map((event, index) => (
        <MobileTimelineItem key={index} event={event} />
      ))}
    </div>
  );
}
