import React, { useState, useEffect, useRef } from "react";

const Timer = () => {
  const endTimeRef = useRef(
    new Date().getTime() + (5 * 24 + 6) * 60 * 60 * 1000
  );

  const [timeLeft, setTimeLeft] = useState(null);

  function getTimeRemaining() {
    const now = new Date().getTime();
    const difference = endTimeRef.current - now;

    if (difference <= 0) return null;

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeRemaining());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!timeLeft) return null;

  return (
    <div className="fixed top-16 right-6 z-40">
      
      <div className="bg-white rounded-2xl shadow-2xl border p-5 w-[300px]">

        <p className="text-xs font-semibold uppercase tracking-widest text-red-600 text-center mb-3">
          🔥 Offer Ends In
        </p>

        <div className="flex justify-between">

          <TimeBox value={timeLeft.days} label="Days" />
          <TimeBox value={timeLeft.hours} label="Hours" />
          <TimeBox value={timeLeft.minutes} label="Min" />
          <TimeBox value={timeLeft.seconds} label="Sec" highlight />

        </div>

        <button className="mt-5 w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg font-semibold transition duration-300 hover:scale-105">
          Enroll Now
        </button>

      </div>
    </div>
  );
};

const TimeBox = ({ value = 0, label, highlight }) => (
  <div className="flex flex-col items-center">
    <div
      className={`w-14 h-14 flex items-center justify-center rounded-xl text-lg font-bold shadow-inner
      ${highlight 
        ? "bg-red-600 text-white animate-pulse" 
        : "bg-gray-100 text-gray-800"}
      `}
    >
      {String(value).padStart(2, "0")}
    </div>
    <span className="text-[10px] mt-2 text-gray-500 uppercase tracking-wider">
      {label}
    </span>
  </div>
);

export default Timer;
