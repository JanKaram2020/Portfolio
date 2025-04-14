"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  position?: "top" | "bottom";
  loading?: boolean;
}

export interface CoupleTimelineProps {
  title?: string;
  subtitle?: string;
  events?: TimelineEvent[];
}

const processAndSortEvents = (events: TimelineEvent[]): TimelineEvent[] => {
  const sortedEvents = [...events].sort(
    (a, b) => parseInt(a.year) - parseInt(b.year),
  );
  return sortedEvents.map((event, index) => {
    if (event.position) return event;
    return { ...event, position: index % 2 === 0 ? "bottom" : "top" };
  });
};

export default function CoupleTimeline({
  title = "Our Story",
  events = defaultEvents,
}: CoupleTimelineProps) {
  const [isMobile, setIsMobile] = useState(false);
  const timelineEvents = processAndSortEvents(events);

  useEffect(() => {
    const checkIfMobile = () => setIsMobile(window.innerWidth < 992);
    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  return (
    <div className="coming_soon_area pt-20 pb-70">
      <div className="coming_soon_shape_1" style={{ zIndex: 1 }}>
        <img src="/assets/images/shape-1.png" alt="shape" />
      </div>
      <div className="text-center mb-5">
        <h1 className="display-4 fst-italic">{title}</h1>
      </div>

      {isMobile ? (
        <MobileTimeline events={timelineEvents} />
      ) : (
        <DesktopTimeline events={timelineEvents} />
      )}
      <div className="coming_soon_shape_2" style={{ zIndex: 1 }}>
        <img src="/assets/images/shape-2.png" alt="shape" />
      </div>
    </div>
  );
}

function DesktopTimeline({ events }: { events: TimelineEvent[] }) {
  if (events.length === 0) return null;

  return (
    <div className="position-relative">
      <div className="row justify-content-between mb-4">
        {events.map((event, i) => (
          <div
            className="col d-flex flex-col text-center"
            key={`top-${i}`}
            style={{
              flexDirection: "column",
              justifyContent: "flex-end",
            }}
          >
            {event.position === "top" && (
              <>
                <div className="d-flex flex-wrap justify-content-center mb-2">
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
                    <Image
                      src={`/assets/wedding-images/${event.year}.png`}
                      alt={`${event.title}`}
                      width={150}
                      height={150}
                      className="img-fluid border shadow-sm grayscale"
                    />
                  )}
                </div>
                <h5>{event.title}</h5>
                <p className="small">{event.description}</p>
              </>
            )}
          </div>
        ))}
      </div>

      <div className="row align-items-center text-center mb-4 timeline-container">
        {/*<div*/}
        {/*  className="position-absolute bg-dark"*/}
        {/*  style={{*/}
        {/*    top: "52%",*/}
        {/*    left: "5%", // adjust as needed*/}
        {/*    right: 0, // adjust as needed*/}
        {/*    height: "2px",*/}
        {/*    zIndex: 0,*/}
        {/*  }}*/}
        {/*></div>*/}
        {events.map((event, i) => (
          <div
            className="col position-relative timeline-item"
            key={`year-${i}`}
          >
            {event.position === "top" && (
              <div
                className="position-absolute translate-middle-y bg-dark"
                style={{
                  width: "2px",
                  height: "50px",
                  top: 0,
                  left: "50%",
                  transform: "translateY(-50%)",
                }}
              ></div>
            )}
            <div
              className={`bg-dark text-white rounded-circle d-flex align-items-center justify-content-center mx-auto timeline-item-year`}
              style={{ width: 64, height: 64 }}
            >
              <span>{event.year}</span>
            </div>
            {event.position === "bottom" && (
              <div
                className="position-absolute bottom-0 start-50 translate-middle-y bg-dark"
                style={{
                  width: "2px",
                  height: "50px",
                  bottom: 0,
                  left: "50%",
                  transform: "translateY(50%)",
                }}
              ></div>
            )}
          </div>
        ))}
      </div>

      <div className="row justify-content-between mt-4">
        {events.map((event, i) => (
          <div className="col text-center" key={`bottom-${i}`}>
            {event.position === "bottom" && (
              <>
                <h5>{event.title}</h5>
                <p className="small">{event.description}</p>
                <div className="d-flex flex-wrap justify-content-center gap-2">
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
                    <Image
                      src={`/assets/wedding-images/${event.year}.png`}
                      alt={`${event.title}`}
                      width={150}
                      height={150}
                      className="img-fluid border shadow-sm grayscale"
                    />
                  )}
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function MobileTimeline({ events }: { events: TimelineEvent[] }) {
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
        <div key={index} className="d-flex mb-5 ps-5">
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
                <Image
                  src={`/assets/wedding-images/${event.year}.png`}
                  alt={`${event.title}`}
                  width={150}
                  height={150}
                  className="img-fluid border shadow-sm grayscale"
                />
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

const defaultEvents: TimelineEvent[] = [
  {
    year: "2018",
    title: "We First Met",
    description:
      "We first got to know each other—just a spark, a glance, and something clicked.",
    position: "bottom",
  },
  {
    year: "2019",
    title: "We Started Dating",
    description:
      "Our story truly began. Countless memories, adventures, and late-night talks.",
    position: "top",
  },
  {
    year: "2020",
    title: "We Grow Closer",
    description:
      "Through highs and extreme lows, we became stronger together and deepened our bond.",
    position: "bottom",
  },
  {
    year: "2021",
    title: "We Dreamed Together",
    description:
      "We began imagining a future together—making plans, sharing visions, and hopes.",
    position: "top",
  },
  {
    year: "2022",
    title: "We Got Engaged",
    description: 'One big "Yes!" sealed with love and a promise for forever.',
    position: "bottom",
  },
  {
    year: "2023",
    title: "We Planned Our Future",
    description:
      "From picking out furniture to finding the perfect decor, we began turning our apartment into a space filled with love, laughter, and memories.",
    position: "top",
  },
  {
    year: "2024",
    title: "We Had Coptic Engagement",
    description:
      "Surrounded by our loved ones, we celebrated a day that will stay in our hearts forever.",
    position: "bottom",
  },
  {
    year: "2025",
    title: "Getting Married",
    description:
      "The day we’ve been dreaming of is finally close. A celebration of love, promises, and the beginning of our forever together.",
    position: "top",
    loading: true,
  },
];
