"use client";

import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function CountdownTimer({ date }: { date: string }) {
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
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  if (isExpired) {
    return (
      <div className="text-center py-5">
        <h3 className="fs-2 text-warning-emphasis">The Big Day Is Here!</h3>
        <p className="text-muted mt-2">
          We're celebrating our special day today!
        </p>
      </div>
    );
  }

  return (
    <div className="py-5 text-center">
      <h2 className="mb-4 title">Counting Down To Our Big Day</h2>
      <div className="row justify-content-center gap-3 flex-wrap">
        {timeUnits.map((unit) => (
          <div
            key={unit.label}
            className="border cols-6 md:cols-3 border-warning-subtle rounded-4 shadow-sm p-3"
            style={{
              width: "120px",
              backgroundColor: "#fffaf6",
            }}
          >
            <div
              className="h3 mb-1 fw-bold text-warning"
              style={{ fontFamily: "Georgia, serif" }}
            >
              {unit.value.toString().padStart(2, "0")}
            </div>
            <div className="small text-muted text-uppercase">{unit.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
