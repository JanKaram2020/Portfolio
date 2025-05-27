"use client";
import { useEffect, useState } from "react";

const singularOrPlural = (time: number) => (time !== 1 ? "s" : "");

const formatValue = (value: number) => (
  <span suppressHydrationWarning className={"inline-block min-w-[2ch]"}>
    {String(value).padStart(2, "0")}
  </span>
);

const formatTime = (startDate: Date, currentDate: Date) => {
  let years = currentDate.getFullYear() - startDate.getFullYear();
  let months = currentDate.getMonth() - startDate.getMonth();
  let days = currentDate.getDate() - startDate.getDate();
  let hours = currentDate.getHours() - startDate.getHours();
  let minutes = currentDate.getMinutes() - startDate.getMinutes();
  let seconds = currentDate.getSeconds() - startDate.getSeconds();
  // Adjust for negative values
  if (seconds < 0) {
    seconds += 60;
    minutes -= 1;
  }
  if (minutes < 0) {
    minutes += 60;
    hours -= 1;
  }
  if (hours < 0) {
    hours += 24;
    days -= 1;
  }
  if (days < 0) {
    // Handle days by borrowing from the previous month
    const previousMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      0,
    ); // Last day of the previous month
    days += previousMonth.getDate();
    months -= 1;
  }
  if (months < 0) {
    months += 12;
    years -= 1;
  }
  let printYears = months >= 6 ? years + 1 : years;

  return (
    <>
      <span className={"print:inline hidden"}>
        {printYears} year{singularOrPlural(printYears)}
      </span>
      <span className={"print:hidden"}>
        {years} year{singularOrPlural(years)}, {formatValue(months)} month
        {singularOrPlural(months)}, {formatValue(days)} day
        {singularOrPlural(days)}, {formatValue(hours)} hour
        {singularOrPlural(hours)}, {formatValue(minutes)} minute
        {singularOrPlural(minutes)}, {formatValue(seconds)} second
        {singularOrPlural(seconds)}
      </span>
    </>
  );
};

const TimeSince = ({ date }: { date: `${number}-${number}-${number}` }) => {
  const timeOfHire = new Date(`${date}T09:00:00`);
  const [currentTime, setCurrentTime] = useState<Date>(new Date());

  useEffect(() => {
    const updateTime = () => {
      setCurrentTime(new Date());
    };

    updateTime(); // Initial state update
    const id = setInterval(updateTime, 1000);

    return () => clearInterval(id);
  }, []);

  return formatTime(timeOfHire, currentTime);
};

export default TimeSince;
