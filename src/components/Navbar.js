import React from "react";

function Navbar() {
  return (
    <nav className="bg-gray-800">
      <div className="container mx-auto py-4 flex justify-between items-center">
        <ul className="flex space-x-4 text-white">
          <li>
            <a href="/" className="hover:text-gray-300">
              Home
            </a>
          </li>
          <li>
            <a href="/" className="hover:text-gray-300">
              Upcoming
            </a>
          </li>
          <li>
            <a href="/" className="hover:text-gray-300">
              Contact
            </a>
          </li>
        </ul>
        <button className="bg-gray-500 hover:bg-gray-700 text-white py-2 px-4 rounded">
          Sign In
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
