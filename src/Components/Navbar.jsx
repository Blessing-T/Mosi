import { Link } from "react-router";
import React from "react";

const Navbar = () => (
  <nav className="bg-transparent p-4 z-50 top-0 absolute w-full">
    <div className="container mx-auto flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <img
          src="src/Components/images/rectangle 103.png"
          alt="Mosi Oa Tunya Logo"
        ></img>
      </div>

      <ul className="flex space-x-6">
        <li>
          <Link to="/" className="text-black hover:text-red-200">
            Home
          </Link>
        </li>

        <li>
          <Link to="/" className="text-black hover:text-red-200">
            Administration
          </Link>
        </li>
        <li>
          <Link to="/student" className="text-black hover:text-red-200">
            Student Life
          </Link>
        </li>
        <li>
          <Link to="/contact" className="text-black hover:text-red-200">
            Contact
          </Link>
        </li>
      </ul>
      
      <button className="bg-red-900 text-white px-4 py-2 rounded-md hover:bg-red-500 transition-colors">
        <Link to="/portal">Portal</Link>
      </button>
      
    </div>
  </nav>
);

export default Navbar;
