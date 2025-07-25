
import bgImage from "./Rectangle.png";
import { MapPin, Clock, Headphones } from "lucide-react";
import React, { useState } from "react";


function Contact() {
  const [submitted, setSubmitted] = useState(false);

const handleSubmit = (e) => {
  e.preventDefault();
  setSubmitted(true);
  setTimeout(() => setSubmitted(false), 3000);
  e.target.reset(); 
};

  return (
    <>
      <div
        className="w-full h-[499px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="w-full h-full flex items-center justify-center flex-col text-center px-4">
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-playfair font-bold text-center mb-10">
            Contact Us
          </h1>
          <div className="w-40 h-1 bg-gradient-to-r from-[#800000] via-[#800000] to-white mb-6"></div>
          <p className="text-white font-roboto text-base sm:text-lg md:text-xl">
            Get in touch with Mosi-Oa-Tunya High School. We're here to help
            <br className="hidden sm:block" /> with any questions about
            admissions, academics, or school life.
          </p>
        </div>
      </div>

      <div className="w-full min-h-[900px] mt-28 mb-20  px-4">
        <div className="flex flex-col md:flex-row md:items-start items-center justify-center font-roboto gap-9 flex-wrap">
          <div className="flex flex-col text-center md:text-left">
            <p className="text-2xl">#Contact Us</p>
            <h1 className="text-[#800000] text-4xl">
              GET IN <br /> TOUCH
            </h1>
          </div>

          <div className="w-full sm:w-[302px] h-[292px] bg-[#80000041] rounded-lg p-5">
            <MapPin className="h-12 w-12 text-[#800000]" />
            <h6 className="mt-4 text-lg font-semibold text-[#800000]">
              School Location
            </h6>
            <p className="mt-6 text-[#000000]">
              1523 Chinotimba <br />
              Victoria Falls, Zimbabwe <br />
              P.O. Box 176
            </p>
          </div>

          <div className="w-full sm:w-[302px] h-[292px] bg-[#80000041] rounded-lg p-5">
            <Clock className="h-12 w-12 text-[#800000]" />
            <h6 className="mt-4 text-lg font-semibold text-[#800000]">
              Office Hours
            </h6>
            <p className="mt-6 text-[#000000]">
              Monday - Friday: 7:30AM - 4:30PM <br />
              Saturday: 08:00 AM - 12:00 PM <br />
              Sunday: Closed
            </p>
          </div>

          <div className="w-full sm:w-[302px] h-[292px] bg-[#80000041] rounded-lg p-5">
            <Headphones className="h-12 w-12 text-[#800000]" />
            <h6 className="mt-4 text-lg font-semibold text-[#800000]">
              Communication
            </h6>
            <p className="mt-6 text-[#000000]">
              +263 13 44568
              <br />
              admissions@mosioatunyahigh.zw
              <br />
              info@mosioatunyahigh.zw
            </p>
          </div>
        </div>

        <div className="bg-[#80000041] max-w-[90%] min-h-[542px]  mt-20 flex justify-center items-center mx-4 md:mx-20 rounded-md">
          <div className="w-full max-w-[1200px] flex flex-col md:flex-row justify-between items-start md:ml-10 md:mb-0 gap-10">
            <div className="w-full md:w-1/2 h-[346px] bg-[#ffffff94] rounded-md p-6">
  <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
    <input
      type="text"
      placeholder="What's Your Name?"
      className="p-3 bg-[#80000046] rounded-md  placeholder:text-[#7A7A7A] font-roboto"
      required
    />
    <input
      type="email"
      placeholder="Your email"
      className="p-3 bg-[#80000046] rounded-md  placeholder:text-[#7A7A7A] font-roboto "
      required
    />
    <textarea
      placeholder="Message"
      className="p-3 bg-[#80000046] rounded-md  placeholder:text-[#7A7A7A] font-roboto h-36 resize-none"
      required
    ></textarea>

    <button
      type="submit"
      className="bg-[#800000] text-white px-6 py-2 rounded-md w-fit mt-4 hover:bg-[#5e0000]"
    >
      Send Message
    </button>

    {submitted && (
      <p className="text-green-600 mt-4 font-semibold text-sm">
        ✅ Message submitted!
      </p>
    )}
  </form>
</div>

            <div className="w-full md:w-1/2 p-2 mt-12">
              <h3 className="font-semibold font-roboto text-lg mb-2">
                Have any query?
              </h3>
              <h2 className="text-4xl font-semibold text-[#800000] mb-4">
                CONTACT US
              </h2>
              <p className=" font-roboto text-gray-800 font-semibold">
                Have any questions about enrollment, programs, or visiting our
                school? Our team is here to assist you. Please use the form
                below or reach out using the provided contact details.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
