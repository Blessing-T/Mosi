import React from "react";
import { Link } from "react-router-dom";
import bgImage from "./Rectangle.png";

function Portal() {
  return (
    <>
      <header
        className="w-full h-full flex items-center justify-center flex-col bg-cover bg-center bg-no-repeat text-white py-16 text-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></header>
      <main className="flex-grow bg-white py-20 px-4 flex flex-col items-center">
        <div className="border border-red-800 rounded-md max-w-4xl w-full p-8 text-center relative">
          <h1 className="text-3xl font-semibold text-[#7B0016] mb-6">
            Welcome <br /> <span className="text-2xl">To The Mosi Portal</span>
          </h1>

          <div className="flex justify-center space-x-6 mt-6 flex-wrap">
            <div className="bg-red-50 border rounded-md px-6 py-8 w-56 flex flex-col items-center">
              <div className="text-2xl mb-2">✔️</div>
              <h2 className="text-lg font-semibold mb-4">Student Portal</h2>
              <button className="bg-[#9E0000] text-white px-4 py-2 rounded">
                <Link to="/loginIn">Click Here</Link>
              </button>
            </div>
            <div className="bg-red-50 border rounded-md px-6 py-8 w-56 flex flex-col items-center">
              <div className="text-2xl mb-2">🏫</div>
              <h2 className="text-lg font-semibold mb-4">Parent Portal</h2>
              <button className="border border-red-800 text-red-800 px-4 py-2 rounded">
                <Link to="/loginIn">Click Here</Link>
              </button>
            </div>
          </div>

          <Link
            to="/Comingsoon"
            className="absolute top-4 right-4 border border-red-800 text-red-800 rounded px-4 py-1 flex items-center space-x-2"
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
