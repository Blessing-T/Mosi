import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Navbar from "../Components/Navbar";
import BouncingCircle from "../Components/BouncingCircle";

const targetDate = new Date("2025-12-31T23:59:59");

const MosiOaTunyaWebsite = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    mins: "00",
    secs: "00",
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const mins = Math.floor((difference / 1000 / 60) % 60);
        const secs = Math.floor((difference / 1000) % 60);

        setTimeLeft({
          days: String(days).padStart(2, "0"),
          hours: String(hours).padStart(2, "0"),
          mins: String(mins).padStart(2, "0"),
          secs: String(secs).padStart(2, "0"),
        });
      } else {
        setTimeLeft({
          days: "00",
          hours: "00",
          mins: "00",
          secs: "00",
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError("");
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.fullName || !formData.email || !formData.phoneNumber) {
      setError("Please fill in all fields.");
      setSubmitted(false);
      return;
    }

    setSubmitted(true);
    setError("");
    setFormData({
      fullName: "",
      email: "",
      phoneNumber: "",
    });
  };

  return (
    <div className="ingonyama min-h-screen">
      <section className="relative bg-white overflow-hidden min-h-[500px]">
        <Navbar />
        <BouncingCircle
          size={96}
          color="bg-red-200"
          opacity="opacity-60"
          initial={{ x: 50, y: 50 }}
        />
        <BouncingCircle
          size={72}
          color="bg-red-300"
          opacity="opacity-40"
          initial={{ x: 200, y: 100 }}
          speed={2.5}
        />
        <BouncingCircle
          size={56}
          color="bg-red-400"
          opacity="opacity-30"
          initial={{ x: 300, y: 200 }}
          speed={2.2}
        />
        <BouncingCircle
          size={120}
          color="bg-red-200"
          opacity="opacity-50"
          initial={{ x: 400, y: 150 }}
          speed={2.8}
        />

        <div className="container mx-auto px-4 md:px-6 py-10 md:py-20 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1 max-w-xl">
              <div className="flex items-center mb-6">
                <div className="bg-red-200 rounded-full px-6 py-3 flex items-center justify-center gap-4 space-x-2">
                  <span className="text-2xl font-bold text-red-800">1368</span>
                  <span className="text-red-600">+</span>
                </div>
              </div>
              <p className="text-3xl md:text-5xl font-bold text-red-900 mb-6 leading-tight">
                Welcome to
                <br />
                <span className="text-red-700">Mosi-Oa-Tunya</span>
                <br />
                <span className="text-red-700">High School</span>
              </p>
              <p className="text-gray-700 text-base md:text-lg mb-8 leading-relaxed">
                We inspire excellence, foster growth, and celebrate
                achievements. Together, let's embark on a journey of learning
                and discovery!
              </p>
              <button className="bg-red-800 text-white px-6 md:px-8 py-3 rounded-md hover:bg-gray-800 transition-colors">
                <Link to="/enroll"> Enroll Now</Link>
              </button>
            </div>
            <div className="flex-1 flex justify-center md:justify-end w-full">
              <div className="relative w-64 object-cover md:w-80">
                <img
                  src={"/Frame 34.png"}
                  alt="Students in graduation gowns"
                  className="rounded-lg shadow-lg w-[900px]"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-20">
            <path
              d="M0,60 C360,0 720,120 1440,60 L1440,120 L0,120 Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      <section className="py-10 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              {
                title: "Portal",
                icon: (
                  <svg
                    className="mx-auto w-8 h-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <rect
                      x="4"
                      y="4"
                      width="16"
                      height="16"
                      rx="2"
                      fill="white"
                    />
                  </svg>
                ),
              },
              {
                title: "Admission",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mx-auto w-8 h-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M4 4h16v16H4z" fill="white" />
                    <path d="M8 8h8v2H8zM8 12h8v2H8z" fill="#d1d5db" />
                  </svg>
                ),
              },
              {
                title: "Academics",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mx-auto w-8 h-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M12 3L2 9l10 6 10-6-10-6z" fill="white" />
                    <path
                      d="M2 17l10 6 10-6"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                    />
                  </svg>
                ),
              },
              {
                title: "Sports",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mx-auto w-8 h-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <circle cx="12" cy="12" r="10" fill="white" />
                    <path
                      d="M12 6v6l4 2"
                      stroke="#d1d5db"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                ),
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-red-800 rounded-lg p-6 md:p-8 text-center hover:shadow-lg transition-shadow flex flex-col items-center justify-center"
              >
                <div className="mb-2 md:mb-4">{item.icon}</div>
                <h3 className="text-lg md:text-xl font-semibold text-white">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 md:py-20 bg-gradient-to-r from-black to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={"/Rectangle 165.png"}
            alt="Students studying"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1 ">
              <div className="text-xs md:text-sm uppercase tracking-wide mb-2">
                2025 JUNE EXAMS
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 md:mb-8">
                REGISTER NOW
              </h2>
              <div className="flex space-x-2 sm:space-x-4 md:space-x-8 mb-6 md:mb-8">
                {[
                  { value: timeLeft.days, label: "days" },
                  { value: timeLeft.hours, label: "hours" },
                  { value: timeLeft.mins, label: "mins" },
                  { value: timeLeft.secs, label: "secs" },
                ].map((time, index) => (
                  <div
                    key={index}
                    className="text-center w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center border-2 border-gray-400 rounded-md bg-white/10"
                  >
                    <div>
                      <div className="text-lg sm:text-2xl md:text-4xl font-bold text-white">
                        {time.value}
                      </div>
                      <div className="text-xs sm:text-sm md:text-base uppercase text-white">
                        {time.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <form
              className="bg-white rounded-lg p-6 md:p-8 max-w-xs w-full ml-0 md:ml-8"
              onSubmit={handleSubmit}
              autoComplete="off"
            >
              <div className="bg-red-700 text-white p-3 md:p-4 rounded-lg mb-4 md:mb-6">
                <h3 className="font-bold">We Are Currently Enrolling</h3>
                <p className="text-xs md:text-sm">
                  Please Fill in the Form and Submit to Enroll
                </p>
              </div>
              <div className="space-y-3 md:space-y-4">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name*"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full p-2 md:p-3 border border-gray-300 rounded-md text-black"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email*"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-2 md:p-3 border border-gray-300 rounded-md text-black"
                />
                <input
                  type="tel"
                  name="phoneNumber"
                  placeholder="Phone Number*"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  className="w-full p-2 md:p-3 border border-gray-300 rounded-md text-black"
                />
                <button
                  type="submit"
                  className="w-full bg-red-700 text-white py-2 md:py-3 rounded-md hover:bg-red-800 transition-colors font-semibold"
                >
                  GET IT NOW
                </button>
                {error && (
                  <div className="text-red-600 text-sm mt-2">{error}</div>
                )}
                {submitted && (
                  <div className="text-green-600 text-sm mt-2">
                    Form submitted successfully!
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Values",
                text: "To develop confident responsible learners equipped with 21st Century skills including digital literacy and social emotional skills.",
              },
              {
                title: "Mission",
                text: "Excellence, Morals, Integrity, Creativity, Discipline, Diligence, Responsibility, Innovation",
              },
              {
                title: "Vision",
                text: "To educate and empower students with knowledge, skills, values and attitude to prepare them to thrive in a changing world.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-black hover:bg-red-700 transition-colors duration-300 text-white p-6 md:p-8 rounded-xl shadow-lg flex flex-col items-center group cursor-pointer"
                style={{
                  boxShadow:
                    "0 4px 24px 0 rgba(0,0,0,0.10), 0 1.5px 6px 0 rgba(0,0,0,0.10)",
                }}
              >
                <div className="text-center mb-2 md:mb-4">
                  <div className="w-8 h-8 md:w-12 md:h-12 rounded-full mx-auto flex items-center justify-center bg-white bg-opacity-10 group-hover:bg-opacity-20 transition">
                    <img src={"/diamond.png"} alt="" className="w-7" />
                  </div>
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-4 text-center group-hover:text-white transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-xs md:text-sm text-center leading-relaxed group-hover:text-white transition-colors duration-300">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 md:pr-12">
              <h2 className="text-2xl md:text-4xl font-bold text-red-700 mb-6 md:mb-8">
                Welcome to Mosi
              </h2>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6 md:mb-8">
                We are thrilled to welcome you to Mosi-Oa-Tunya High School,
                where excellence meets opportunity and dreams become reality.
                Our school is dedicated to fostering a nurturing environment
                that encourages academic achievement, personal growth, and
                lifelong learning. At Mosi-Oa-Tunya High School, we believe that
                every student has their full potential. Our dedicated faculty
                and staff are committed to providing a well-rounded education
                that not only focuses on academic excellence but also emphasizes
                character development, critical thinking, and creativity. We
                strive to create a community of discovery, exploration, and
                achievement. Together, we will create lasting memories and build
                a strong foundation for a successful and fulfilling future.
              </p>
              <button className="bg-red-700 text-white px-4 md:px-6 py-2 md:py-3 rounded-md hover:bg-red-800 transition-colors">
                Read About Mosi
              </button>
            </div>
            <div className="flex-1">
              <img
                src={"/download (8) 1.png"}
                alt="Student portrait"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-xl md:text-3xl font-bold text-center mb-2 md:mb-4 text-red-700">
            News & Events
          </h2>
          <p className="text-center text-gray-600 mb-8 md:mb-12">Highlights</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8">
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <img
                src={"/News 1.png"}
                alt="Students at school"
                className="w-full h-48 md:h-64 object-cover"
              />
              <div className="absolute bottom-4 left-4">
                <span className="bg-red-700 text-white px-4 py-2 rounded-md">
                  Lorem Ipsum
                </span>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <img
                src={"/news2.png"}
                alt="Students at school"
                className="w-full h-48 md:h-64 object-cover"
              />
              <div className="absolute bottom-4 left-4">
                <span className="bg-red-700 text-white px-4 py-2 rounded-md">
                  Lorem Ipsum
                </span>
              </div>
            </div>
          </div>
          <div className="text-center">
            <button className="border-2 border-red-700 text-red-700 px-4 md:px-6 py-2 rounded-md hover:bg-red-700 hover:text-white transition-colors">
              View More News
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MosiOaTunyaWebsite;
