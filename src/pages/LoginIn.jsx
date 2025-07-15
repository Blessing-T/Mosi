import React from "react";
import bgImage from "./Rectangle.png";

function LoginIn() {
  return (
    <>
      <header className="w-full h-full flex items-center justify-center flex-col bg-cover bg-center bg-no-repeat text-white py-16 text-center"
                style={{ backgroundImage: `url(${bgImage})` }}
            >
        <h1 className="text-white  text-4xl font-playfair font-bold text-center mb-10">Welcome Back</h1>
        <p className="mt-2">Sign in to access your student portal</p>
      </header>

      
      <main className="px-4 mt-28 mb-20 flex-grow flex justify-center items-center bg-white relative">
        <div className="w-full max-w-md p-6 border rounded shadow-md bg-white z-10">
          <form className="space-y-4">
            <div>
              <label className="block font-medium">Email Address</label>
              <div className="flex items-center border rounded px-3 py-2 mt-1">
                <span className="text-red-700 mr-2">📧</span>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full outline-none"
                />
              </div>
            </div>
            <div>
              <label className="block font-medium">Password</label>
              <div className="flex items-center border rounded px-3 py-2 mt-1">
                <span className="text-red-700 mr-2">🔒</span>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full outline-none"
                />
                <span className="text-red-700 ml-2">👁️</span>
              </div>
            </div>
            <div className="flex justify-between items-center text-sm">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" /> Remember me
              </label>
              <a href="#" className="text-red-700 hover:underline">Forgot Password?</a>
            </div>
            <button
              type="submit"
              className="w-full bg-[#9E0000] text-white py-2 rounded font-medium"
            >
              Sign In
            </button>
          </form>
          <p className="text-center text-sm mt-4">
            Don’t have an account?{' '}
            <a href="#" className="text-red-700 font-semibold hover:underline">
              Register as New Student
            </a>
          </p>
        </div>
      </main>
    </>
  );
}

export default LoginIn;