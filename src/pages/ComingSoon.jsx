import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function ComingSoonPage() {
  const calculateTimeLeft = () => {
    const difference = +new Date("2025-10-20T00:00:00") - +new Date();
    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

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

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  const timerComponents = Object.keys(timeLeft).map((interval) => (
    <div key={interval} className="flex flex-col items-center mx-4 animate-pulse">
      <div className="w-32 h-32 border-2 border-red-800 rounded-full flex items-center justify-center">
        <span className="text-3xl text-red-800 font-bold">{timeLeft[interval]}</span>
      </div>
      <span className="mt-2 text-md font-semibold capitalize">{interval}</span>
    </div>
  ));

  return (
    <div className="min-h-screen flex flex-col items-center justify-between bg-white">
     
      <main className="flex flex-col items-center justify-center flex-grow py-16">
        <img src="/Rectangle 103.png" alt="Mosi Oa Tunya Logo" className="w-100 h-100 mb-6" />
        <h1 className="text-4xl font-bold mb-10">COMING SOON</h1>

        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {timerComponents}
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 text-black">
          <input
            type="email"
            placeholder="Enter Your Email Here"
            className="border px-4 py-2 rounded w-80"
          />
          <button className="border border-red-800 text-red-800 px-6 py-2 rounded hover:bg-red-800 hover:text-white transition">
            Notify Me
          </button>
        </div>
      </main>
    </div>
  );
}

