import React from "react";
import bgImage from "./Rectangle.png";
import { MapPin,Clock,Headphones } from "lucide-react";

const Portal = () => {
  return (
    <>
      <div
        className=" w-full h-[499px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="w-full h-full flex items-center justify-center flex-col ">
          <h1 className="text-white  text-6xl font-playfair font-bold text-center mb-10">
            Contact Us
          </h1>
          <div className="w-40 h-1 bg-gradient-to-r from-[#800000] via-[#800000] to-white mb-6"></div>
          <p className="text-white font-roboto text-xl ">
            Get in touch with Mosi-Oa-Tunya High School. We're here to help{" "}
            <br /> with any questions about admissions, academics, or school
            life.
          </p>
        </div>
      </div>

      <div className=" w-full h-[900px] mt-28  flex  flex-col md:flex-row  justify-center font-roboto gap-10 ">
        <div className=" flex flex-col">
          <p className=" text-2xl">#Contact Us</p>
          <h1 className="text-[#800000] text-4xl">
            GET IN <br /> TOUCH
          </h1>
        </div>

        <div className="w-[302px] h-[292px] bg-[#F0DCDC] rounded-lg p-5">
          <MapPin className="h-7 w-7 text-[#800000]" />
          <h6 className="mt-2 text-lg font-semibold text-[#800000]">
            School Location
          </h6>
          <p className="mt-2 text-gray-800">
            1523 Chinotimba <br />
            Victoria Falls, Zimbabwe <br />
            P.O. Box 176
          </p>
        </div>

        <div className="w-[302px] h-[292px] bg-[#F0DCDC] rounded-lg p-5">
          <Clock className="h-7 w-7 text-[#800000]" />
          <h6 className="mt-2 text-lg font-semibold text-[#800000]">
            Office Hours
          </h6>
          <p className="mt-2 text-gray-800">
            Monday - Friday: 7:30AM - 4:30PM <br />
            Saturday: 08:00 AM - 12:00 PM <br />
            Sunday: Closed
          </p>
        </div>

        <div className="w-[302px] h-[292px] bg-[#F0DCDC] rounded-lg p-5">
          <Headphones className="h-7 w-7 text-[#800000]" />
          <h6 className="mt-2 text-lg font-semibold text-[#800000]">
            School Location
          </h6>
          <p className="mt-2 text-gray-800">
            1523 Chinotimba <br />
            Victoria Falls, Zimbabwe <br />
            P.O. Box 176
          </p>
        </div>
      </div>
    </>
  );
};

export default Portal;
