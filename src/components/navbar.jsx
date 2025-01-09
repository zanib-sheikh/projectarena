import React, { useState } from "react";
import logo from "../assets/logo.png";
import menu from "../assets/menu.png"; // Custom hamburger icon

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to toggle the menu visibility

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the menu visibility when hamburger is clicked
  };

  return (
    <div className="font-montserrat bg-[rgb(29,30,31)]">
      <nav className="relative flex items-center z-10 justify-between px-6 py-1 bg-transparent text-white">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="Logo"
            className="w-20 h-20 object-contain" // Adjusted logo size
          />
        </div>

        {/* Desktop View - Navigation Links */}
        <div className="hidden md:flex items-center ml-auto space-x-12 text-sm font-lg">
          <a href="#about" className="hover:text-green-500 transition duration-300">
            About
          </a>
          <a href="#feature" className="hover:text-green-500 transition duration-300">
            Feature
          </a>
          <a
            href="#subscription"
            className="hover:text-green-500 transition duration-300"
          >
            Subscription Benefits
          </a>
          {/* Sign Up Button */}
          <button className="flex items-center px-3 py-2 bg-white hover:bg-gray-200 hover:text-black border-2 border-b-4 border-black rounded-full text-black font-semibold text-sm shadow-md transition duration-300">
            Sign Up for Beta
            <span className="ml-2 flex items-center justify-center w-8 h-8 bg-green-800 text-white rounded-full shadow-inner">
              ➙
            </span>
          </button>
        </div>

        {/* Hamburger Menu (Mobile View) */}
        <div className="md:hidden flex py-1 items-center">
          <button
            onClick={toggleMenu}
            className="text-white"
            aria-label="Toggle Navigation"
          >
            <img
              src={menu}
              alt="Hamburger Menu"
              className="w-6 h-6"
            />
          </button>
        </div>

        {/* Dropdown Menu (Mobile View) */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:hidden absolute top-full left-0 w-full h-auto bg-black py-2 flex flex-col items-center space-y-4`}
        >
          <a
            href="#about"
            className="hover:text-green-500 text-white transition duration-300"
          >
            About
          </a>
          <a
            href="#feature"
            className="hover:text-green-500 text-white transition duration-300"
          >
            Feature
          </a>
          <a
            href="#subscription"
            className="hover:text-green-500 text-white transition duration-300"
          >
            Subscription Benefits
          </a>
          <button className="flex items-center px-3 py-2 bg-white hover:bg-gray-200 hover:text-black border-2 border-b-4 border-black rounded-full text-black font-semibold text-sm shadow-md transition duration-300">
            Sign Up for Beta
            <span className="ml-2 flex items-center justify-center w-8 h-8 bg-green-800 text-white rounded-full shadow-inner">
              ➙
            </span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
