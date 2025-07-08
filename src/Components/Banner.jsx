import React from "react";




function Banner() {
  return (
    <div
      className=" relative w-full h-[499px]  bg-cover  bg-center bg-no-repeat "
      style={{ backgroundImage: `url('/Rectangle190.png')` }}
    >
      <div className=" w-full   absolute  inset-0 bg-black bg-opacity-40 z-10"></div>

    
      <div className="w-full h-full flex items-center justify-center flex-col relative z-10 ">
        <h1 className="text-white text-6xl   font-playfair font-bold text-center mb-20">
          Student Life
        </h1>
        <div className="w-40 h-1 bg-gradient-to-r from-[#800000] via-[#800000] to-white mb-6"></div>
        <p className="text-white font-roboto   text-xl ">
          Students enjoy a balanced mix of academics, sports, club <br />
          and cultural activities preparing for a bright future
        </p>
      </div>
    </div>
  );
}

export default Banner;
