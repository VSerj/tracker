import React from 'react';
import { useState, useEffect } from 'react';

const TrackerTimer = ({ classTimer, timestamp }) => {
  const [time, setTime] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
    timestamp,
  });

  useEffect(() => {
    const timerId = setInterval(() => {
      const start = timestamp;
      const end = time.timestamp + 1000;
      const diff = end - start;
      const restOfHours = diff % 3600000;
      const hours = (diff - restOfHours) / 3600000;
      const restOfMinutes = restOfHours % 60000;
      const minutes = (restOfHours - restOfMinutes) / 60000;
      const restOfSeconds = restOfMinutes % 1000;
      const seconds = (restOfMinutes - restOfSeconds) / 1000;
      
      setTime(prev => ({
        hours,
        seconds,
        minutes,
        timestamp: prev.timestamp + 1000,
      }));
    }, 1000);

    return () => clearInterval(timerId);
  });

  return (
    <time className={classTimer}>
      {`${time.hours}:${time.minutes}:${time.seconds}`}
    </time>
  );
};

export default TrackerTimer;
