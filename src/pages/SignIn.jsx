import React from "react";
import bgImage from "./Rectangle225.png";



function SignIn() {
  const handleSubmit = (e) => {
    e.preventDefault();

  const fullName= document.getElementById("fullName").value;
  const email = document.getElementById("email").value;
  const phoneNumber = document.getElementById("phoneNumber").value;
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  if(!fullName || !email || !phoneNumber || !username || !password || !confirmPassword) {
    alert("Please fill in all fields before signing in");
    return;
  }
    window.location.href = "/Student-portal";
  };

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
        
        <form onSubmit={handleSubmit} className="w-full max-w-4xl space-y-10 font-roboto">
            <h1 className="text-5xl font-roboto text-[#800000]">Sign Up</h1>
          <div className="flex flex-col md:flex-row gap-6 md:gap-20">
            <input
            id="fullName"
              type="text"
              placeholder="Full Name"
              className="placeholder-[#80000069] w-full md:w-[600px] border border-[#800000] p-3 rounded-md outline-none"
              required
            />
            <input
            id="email"
              type="email"
              placeholder="Email"
              className="placeholder-[#80000069] w-full md:w-[600px] border border-[#800000] p-3 rounded-md outline-none"
              required
            />
          </div>

          <div className="flex flex-col md:flex-row gap-6 md:gap-20">
            <input
              id="phoneNumber"
              type="number"
              placeholder="Phone Number"
              className="placeholder-[#80000069] w-full md:w-[600px] border border-[#800000] p-3 rounded-md outline-none"
              required
            />
            <input
              id="username"
              type="text"
              placeholder="Username"
              className="placeholder-[#80000069] w-full md:w-[600px] border border-[#800000] p-3 rounded-md outline-none"
              required
            />
          </div>

          <div className="flex flex-col md:flex-row gap-6 md:gap-20">
            <input
              id="password"
              type="password"
              placeholder="Password"
              className="placeholder-[#80000069] w-full md:w-[600px] border border-[#800000] p-3 rounded-md outline-none"
              required
            />
            <input
            id="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              className="placeholder-[#80000069] w-full md:w-[600px] border border-[#800000] p-3 rounded-md outline-none"
              required
            />
          </div>

          <button
            type="submit"
            className="mt-6 bg-[#800000] text-white px-6 py-3 rounded-md hover:bg-red-900"
          >
            
            Sign In
           
          </button>
        </form>
      </div>
    </>
  );
}

export default SignIn;
