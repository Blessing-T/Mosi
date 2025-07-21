import React from "react";
import bgImage from "./Rectangle225.png";
import { Link } from "react-router-dom";


function SignIn() {
  return (
    <>
      <div
        className=" w-full h-[376px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="w-full h-full flex items-center justify-center flex-col ">
          <h1 className="text-white  text-5xl font-playfair font-bold text-center mb-10">
            Welcome to Mosi Portal
          </h1>
          <div className="w-40 h-1 bg-gradient-to-r from-[#800000] via-[#800000a1] to-white mb-6"></div>
        </div>
      </div>

      <div className="mt-28 mb-20 flex items-center justify-center px-4">
        
        <form className="w-full max-w-4xl space-y-10 font-roboto">
            <h1 className="text-5xl font-roboto text-[#800000]">Sign Up</h1>
          <div className="flex flex-col md:flex-row gap-6 md:gap-20">
            <input
              type="text"
              placeholder="Full Name"
              className="placeholder-[#80000069] w-full md:w-[600px] border border-[#800000] p-3 rounded-md outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="placeholder-[#80000069] w-full md:w-[600px] border border-[#800000] p-3 rounded-md outline-none"
            />
          </div>

          <div className="flex flex-col md:flex-row gap-6 md:gap-20">
            <input
              type="number"
              placeholder="Phone Number"
              className="placeholder-[#80000069] w-full md:w-[600px] border border-[#800000] p-3 rounded-md outline-none"
            />
            <input
              type="text"
              placeholder="Username"
              className="placeholder-[#80000069] w-full md:w-[600px] border border-[#800000] p-3 rounded-md outline-none"
            />
          </div>

          <div className="flex flex-col md:flex-row gap-6 md:gap-20">
            <input
              type="password"
              placeholder="Password"
              className="placeholder-[#80000069] w-full md:w-[600px] border border-[#800000] p-3 rounded-md outline-none"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="placeholder-[#80000069] w-full md:w-[600px] border border-[#800000] p-3 rounded-md outline-none"
            />
          </div>

          <button
            type="submit"
            className="mt-6 bg-[#800000] text-white px-6 py-3 rounded-md hover:bg-red-900"
          >
            <Link to="/Student Portal">
            Sign In
            </Link>
          </button>
        </form>
      </div>
    </>
  );
}

export default SignIn;
