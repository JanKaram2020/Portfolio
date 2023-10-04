import React, { useEffect, useState } from 'react';
import { Text } from '@chakra-ui/react';

const formatTime = (seconds: number) => {
  const month = 1000 * 60 * 60 * 24 * 30;
  const day = 1000 * 60 * 60 * 24;
  const hour = 1000 * 60 * 60;
  const minute = 1000 * 60;
  const months = Math.floor(seconds / month);
  const days = Math.floor((seconds % month) / day);
  const hours = Math.floor((seconds % day) / hour);
  const minutes = Math.floor((seconds % hour) / minute);
  const second = Math.floor((seconds % minute) / 1000);
  return `${months} months, ${days} days, ${hours} hours, ${minutes} minutes, ${second} seconds`;
};
const timeOfHire = new Date('2023-01-16T09:00:00');
const TimeSinceHire = () => {
  const initialDiff = new Date().getTime() - timeOfHire.getTime();
  const [ctime, setCTime] = useState<number>(initialDiff);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const updateTime = () => {
      const newTime = new Date().getTime() - timeOfHire.getTime();
      setCTime(newTime);
    };
    const id = setInterval(updateTime, 1000);
    return () => clearInterval(id);
  }, []);

  if (isClient)
    return (
      <Text
        as="span"
        sx={{
          '@media print': {
            display: 'none',
          },
        }}
      >
        {formatTime(ctime)}
      </Text>
    );
  return null;
};
export default TimeSinceHire;
