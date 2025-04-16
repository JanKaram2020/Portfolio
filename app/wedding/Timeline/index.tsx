"use client";

import React, { useEffect, useState } from "react";
import DesktopTimeline from "./Desktop";
import MobileTimeline from "./Mobile";

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  position?: "top" | "bottom";
  loading?: boolean;
}

const processAndSortEvents = (events: TimelineEvent[]): TimelineEvent[] => {
  const sortedEvents = [...events].sort(
    (a, b) => parseInt(a.year) - parseInt(b.year),
  );
  return sortedEvents.map((event, index) => {
    return { ...event, position: index % 2 === 0 ? "bottom" : "top" };
  });
};

export default function CoupleTimeline() {
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
        <h1 className="display-4 fst-italic"> Our Story</h1>
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

const events: TimelineEvent[] = [
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
