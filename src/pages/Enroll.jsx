import React from "react";
import bgImage from "./Rectangle.png";


function Enroll() {
  return (
    <>
      <div
        className=" w-full h-[499px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="w-full h-full flex items-center justify-center flex-col ">
          <h1 className="text-white  text-4xl font-playfair font-bold text-center mb-10">
            Join The Mosi Family
          </h1>
          <p className="text-white font-roboto mt-7">Fill the form below</p>
        </div>
      </div>

      {/* Form Section */}
      <div className=" px-4 mt-28 mb-20 flex items-center justify-center">
        <form className="w-full max-w-4xl space-y-4 font-roboto ">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="First Name"
              className=" placeholder-[#80000069]  flex-1 border border-[#800000] p-3 rounded-md outline-none"
            />
            <input
              type="text"
              placeholder="Last Name"
              className=" placeholder-[#80000069]  flex-1 border border-[#800000] p-3 rounded-md outline-none"
            />
          </div>

          <input
            type="text"
            placeholder="Address "
            className=" placeholder-[#80000069]  w-full border border-[#800000]  p-3 rounded-md outline-none"
          />

          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex flex-1 border border-[#800000] rounded-md overflow-hidden">
              <select className="bg-white border-r border-[#800000] p-3 text-[#800000] opacity-[60%] outline-none">
                <option value="+263">+263</option>
                <option value="+27">+27</option>
                <option value="+254">+254</option>
                <option value="+260">+260</option>
              </select>
              <input
                type="tel"
                placeholder="Phone Number"
                className=" placeholder-[#80000069] opacity-[60%] flex-1 p-3 outline-none"
              />
            </div>

            <input
              type="email"
              placeholder="Email"
              className=" placeholder-[#80000069]  flex-1 border border-[#800000] p-3 rounded-md outline-none"
              required
            />
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <select className="text-[#80000069]  flex-1 border border-[#800000] p-3 rounded-md outline-none ">
              <option disabled selected>
                Gender
              </option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
            <input
              type="text"
              placeholder="Guardian Full Name"
              className=" placeholder-[#80000069]  flex-1 border border-[#800000] p-3 rounded-md outline-none"
            />
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <select className=" text-[#80000069]  flex-1 border border-[#800000] p-3 rounded-md outline-none ">
              <option disabled selected>
                Form
              </option>
              <option>Form 1</option>
              <option>Form 2</option>
              <option>Form 3</option>
              <option>Form 4</option>
              <option>Form 5</option>
              <option>Form 6</option>
            </select>
            <input
              type="text"
              placeholder="Guardian Number"
              className=" placeholder-[#80000069]  flex-1 border border-[#800000] p-3 rounded-md outline-none"
            />
          </div>

          <button
            type="submit"
            className="mt-6 bg-[#800000] text-white px-6 py-3 rounded-md hover:bg-red-900"
          >
            
            Enroll Now
            
          </button>
        </form>
      </div>
    </>
  );
}

export default Enroll;
