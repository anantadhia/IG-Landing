import React, { useState, useEffect } from "react";

function Count() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const countDownDate = new Date("2023-02-20").getTime();
    const intervalId = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
      setHours(
        Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      );
      setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
      setSeconds(Math.floor((distance % (1000 * 60)) / 1000));
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="grid grid-flow-col gap-5 text-center text-yellow-100 auto-cols-max  justify-center">
      <div className="flex flex-col">
        <span className="countdown font-mono text-5xl">
          <span style={{ "--value": days }}></span>
        </span>
        days
      </div>
      <div className="flex flex-col">
        <span className="countdown font-mono text-5xl">
          <span style={{ "--value": hours }}></span>
        </span>
        hours
      </div>
      <div className="flex flex-col">
        <span className="countdown font-mono text-5xl">
          <span style={{ "--value": minutes }}></span>
        </span>
        min
      </div>
      <div className="flex flex-col">
        <span className="countdown font-mono text-5xl">
          <span style={{ "--value": seconds }}></span>
        </span>
        sec
      </div>
    </div>
  );
}

export default Count;
