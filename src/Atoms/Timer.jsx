"use client";
import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2024-09-09T00:00:00+05:30"); // 9th Sept 00:00 AM IST
    const currentDate = new Date();
    const difference = targetDate - currentDate;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <div className="flex gap-4 h-full text-center">
        {timeLeft.days !== undefined ? (
          <>
            <div className="flex flex-col w-16">
              <span className="bg-gradient-to-r from-yellow to-orange py-2 rounded-xl font-medium text-3xl text-white">
                {timeLeft.days}
              </span>
              <p className="text-orange text-sm">days</p>
            </div>
            <div className="flex flex-col w-16">
              <span className="bg-gradient-to-r from-yellow to-orange py-2 rounded-xl font-medium text-3xl text-white">
                {timeLeft.hours}
              </span>
              <p className="text-orange text-sm">hours</p>
            </div>
            <div className="flex flex-col w-16">
              <span className="bg-gradient-to-r from-yellow to-orange py-2 rounded-xl font-medium text-3xl text-white">
                {timeLeft.minutes}
              </span>
              <p className="text-orange text-sm">mins</p>
            </div>
            <div className="flex flex-col w-16">
              <span className="bg-gradient-to-r from-yellow to-orange py-2 rounded-xl font-medium text-3xl text-white">
                {timeLeft.seconds}
              </span>
              <p className="text-orange text-sm">secs</p>
            </div>
          </>
        ) : (
          <span>Time&apos;s up!</span>
        )}
      </div>
    </div>
  );
};

export default CountdownTimer;
