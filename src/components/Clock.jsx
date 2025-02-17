import React, { useState, useEffect } from "react";
import "./WeatherTody.css";
import "./Responsive.css";

const Clock = () => {
  const [dateTime, setDateTime] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      let date = new Date();
      let indianTime = date.toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
      });
      setDateTime(indianTime);
    }, 1000);


    return () => clearInterval(intervalId);
  }, []); 

  return (
    <>
      <div className="timeDetails">
        <span>{dateTime}</span>
      </div>
    </>
  );
};

export default Clock;
