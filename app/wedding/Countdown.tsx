"use client";

import { useEffect, useState } from "react";
import { e2a } from "lib/lang";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function CountdownTimer({
  date,
  lang = "en",
}: {
  date: string;
  lang?: "en" | "ar";
}) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    const targetDate = new Date(date).getTime();
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setIsExpired(true);
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        ),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [date]);

  const timeUnits = [
    {
      label: lang === "en" ? "Days" : "يوم",
      value: lang === "en" ? timeLeft.days : e2a(`${timeLeft.days}`),
    },
    {
      label: lang === "en" ? "Hours" : "ساعة",
      value: lang === "en" ? timeLeft.hours : e2a(`${timeLeft.hours}`),
    },
    {
      label: lang === "en" ? "Minutes" : "دقيقة",
      value: lang === "en" ? timeLeft.minutes : e2a(`${timeLeft.minutes}`),
    },
    {
      label: lang === "en" ? "Seconds" : "ثانية",
      value: lang === "en" ? timeLeft.seconds : e2a(`${timeLeft.seconds}`),
    },
  ];

  if (!isExpired) {
    return (
      <div className="text-center py-5">
        <h3 className="fs-2 text-warning-emphasis">
          {lang === "en" ? "The Big Day Is Here!" : "فرحنا انهاردة !"}
        </h3>
        <p className="text-muted mt-2">
          {lang === "en"
            ? "We're celebrating our special day today!"
            : "مستنيينك !"}
        </p>
      </div>
    );
  }

  return (
    <div className="py-5 text-center">
      <h2 className="mb-4 title countdown-title">
        {lang === "en" ? "Counting Down To Our Big Day" : "عد تنازلي لفرحنا"}
      </h2>
      <div className="countdown-container">
        {timeUnits.map((unit) => (
          <div
            key={unit.label}
            className="border border-warning-subtle rounded-4 shadow-sm p-3 countdown-cell"
          >
            <div
              className="h3 mb-1 fw-bold text-warning"
              style={{ fontFamily: "Georgia, serif" }}
            >
              {unit.value.toString().padStart(2, lang === "en" ? "0" : "٠")}
            </div>
            <div className="small text-muted text-uppercase">{unit.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
