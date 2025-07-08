import { Link } from "react-router-dom";
import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#d6d6d656] bg-cover bg-center p-4 z-50 top-0 absolute w-full">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Link to="/">
            <img
              src="./Rectangle 103.png"
              alt="Mosi Oa Tunya Logo"
              className="w-10 h-10 object-contain"
            />
          </Link>
        </div>

        <button
          className="text-white text-3xl md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        <ul className="hidden md:flex items-center space-x-6 text-white font-medium">
          <li>
            <Link to="/" className="hover:text-red-200">
              Home
            </Link>
          </li>

          <li>
            <Link to="/" className="hover:text-red-200">
              Administration
            </Link>
          </li>
          <li>
            <Link to="/student" className="hover:text-red-200">
              Student Life
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-red-200">
              Contact
            </Link>
          </li>
        </ul>

        <div className="hidden md:block">
          <button className="bg-red-900 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors">
            <Link to="/portal">Portal</Link>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden mt-4 flex flex-col space-y-2 items-start text-white px-4">
          <Link to="/" className="hover:text-red-200">
            Home
          </Link>
          <Link to="/" className="hover:text-red-200">
            Administration
          </Link>
          <Link to="/student" className="hover:text-red-200">
            Student Life
          </Link>
          <Link to="/contact" className="hover:text-red-200">
            Contact
          </Link>
          <Link
            to="/portal"
            className="inline-block bg-red-900 px-4 py-2 rounded-md hover:bg-red-600"
          >
            Portal
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
