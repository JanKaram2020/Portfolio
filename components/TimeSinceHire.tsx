import React, { useEffect, useState } from 'react';

const singularOrPlural = (time: number) => (time > 1 ? 's' : '');

const formatTime = (time: number) => {
  const month = 1000 * 60 * 60 * 24 * 30;
  const day = 1000 * 60 * 60 * 24;
  const hour = 1000 * 60 * 60;
  const minute = 1000 * 60;
  const months = Math.floor(time / month);
  const days = Math.floor((time % month) / day);
  const hours = Math.floor((time % day) / hour);
  const minutes = Math.floor((time % hour) / minute);
  const seconds = Math.floor((time % minute) / 1000);
  return `1 year, ${months} month${singularOrPlural(months)}, ${days} day${singularOrPlural(
    days
  )}, ${hours} hour${singularOrPlural(hours)}, ${minutes} minute${singularOrPlural(
    minutes
  )}, ${seconds} second${singularOrPlural(seconds)}`;
};

const timeOfHire = new Date('2024-01-16T09:00:00');

const TimeSinceHire = () => {
  const [ctime, setCTime] = useState<number | undefined>(undefined);

  useEffect(() => {
    const updateTime = () => {
      const newTime = new Date().getTime() - timeOfHire.getTime();
      setCTime(newTime);
    };
    const id = setInterval(updateTime, 1000);
    return () => clearInterval(id);
  }, []);

  if (ctime) return <span className="print:hidden">{formatTime(ctime)}</span>;
  return null;
};
export default TimeSinceHire;
