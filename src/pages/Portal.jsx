import React from "react";
import { Link } from "react-router-dom";
import bgImage from "./Rectangle.png";

function Portal() {
  return (
    <>
      
      <header
        className="w-full h-[150px] md:h-[150px] bg-cover bg-center bg-no-repeat flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
       
      </header>

    
      <main className="flex-grow bg-white py-16 px-4 flex justify-center">
        <div className="border border-red-800 rounded-md max-w-4xl w-full p-8 text-center relative shadow-lg">
          
          <h1 className="text-2xl md:text-3xl font-semibold text-[#7B0016] mb-4">
            Welcome <br />
            <span className="text-lg md:text-2xl font-medium">
              To The Mosi Portal
            </span>
          </h1>

          {/* Portal Options */}
          <div className="flex flex-col lg:flex-row justify-center items-center gap-6 mt-8">
            {/* Student Portal */}
            <div className="bg-red-50 border border-red-200 rounded-md px-6 py-8 w-64 flex flex-col items-center hover:shadow-md transition">
              <div className="text-3xl mb-2">✔️</div>
              <h2 className="text-lg font-semibold mb-4">Student Portal</h2>
              <Link
                to="/loginIn"
                className="bg-[#9E0000] text-white px-4 py-2 rounded hover:bg-red-900 transition"
              >
                Click Here
              </Link>
            </div>

            
            <div className="bg-red-50 border border-red-200 rounded-md px-6 py-8 w-64 flex flex-col items-center hover:shadow-md transition">
              <div className="text-3xl mb-2">🏫</div>
              <h2 className="text-lg font-semibold mb-4">Parent Portal</h2>
              <Link
                to="/loginIn"
                className="border border-red-800 text-red-800 px-4 py-2 rounded hover:bg-red-800 hover:text-white transition"
              >
                Click Here
              </Link>
            </div>
          </div>

         
          <Link
            to="/Comingsoon"
            className="absolute top-4 right-4 border border-red-800 text-red-800 rounded px-4 py-1 flex items-center gap-1 hover:bg-red-800 hover:text-white transition"
          >
            <span>Admin</span>
            <span>→</span>
          </Link>
        </div>
      </main>
    </>
  );
}

export default Portal;
