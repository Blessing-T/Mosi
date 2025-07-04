import React from "react";
import { Twitter, Instagram, Linkedin, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-[#800000] text-white overflow-hidden">
      {/* 🟣 Exact Top Wave */}
      <div className="absolute top-0 left-0 w-full">
        <svg
          className="w-full h-[120px]"
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            fill="#a65c5c"
            d="M0,96 C240,0 720,160 1080,80 C1260,40 1380,80 1440,96 L1440,0 L0,0 Z"
          />
        </svg>
      </div>

      {/* Content Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-8 md:flex md:items-start md:justify-between">
        {/* Left: Logo and Text */}
        <div className="flex items-center gap-4">
          <img
            src="https://via.placeholder.com/60x80.png?text=Logo"
            alt="Logo"
            className="w-[60px] h-[80px] object-contain"
          />
          <div>
            <h2 className="text-xl font-bold">Mosi-Oa-Tunya High School</h2>
            <p className="italic text-gray-200">Imfundo Ngumanqoba</p>
          </div>
        </div>

        {/* Right: Social Icons */}
        <div className="mt-8 md:mt-0 flex gap-4">
          {[Twitter, Instagram, Linkedin, Facebook].map((Icon, index) => (
            <a
              key={index}
              href="#"
              className="bg-[#a65c5c] hover:bg-[#902d2d] transition-colors rounded-full p-3"
            >
              <Icon size={20} className="text-white" />
            </a>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="w-[90%] mx-auto border-t border-[#a65c5c] my-4" />

      {/* Bottom Text */}
      <div className="text-center text-sm text-white pb-6 space-y-2">
        <p>
          @Mosi-Oa-TunyaHighSchool. All Rights Reversed. Charity Number 356 78
        </p>
        <p>
          Designed by <span className="font-semibold">Sharyn</span> - Powered by{" "}
          <span className="font-semibold underline">Tariro and Sandra</span> - Marketer{" "}
          <span className="font-semibold underline">Fizhan</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
