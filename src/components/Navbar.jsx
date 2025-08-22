import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white  z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">
          Nestor<span className="text-blue-700">Pro.</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-6 text-gray-700 text-base font-medium">
            <li>
              <a href="#home" className="hover:text-blue-600 transition-colors duration-300">Home</a>
            </li>
            <li>
              <a href="#services" className="hover:text-blue-600 transition-colors duration-300">Services</a>
            </li>
            <li>
              <a href="#listings" className="hover:text-blue-600 transition-colors duration-300">Listings</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-600 transition-colors duration-300">Contact</a>
            </li>
          </ul>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-base font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-md">
            Get Started
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/30 z-40 md:hidden"
        ></div>
      )}

      {/* Mobile Slide-Out Menu */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-3/4 bg-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex flex-col p-6 space-y-6 text-lg font-semibold text-gray-800">
          <a href="#home" onClick={() => setIsOpen(false)} className="hover:text-blue-600">Home</a>
          <a href="#services" onClick={() => setIsOpen(false)} className="hover:text-blue-600">Services</a>
          <a href="#listings" onClick={() => setIsOpen(false)} className="hover:text-blue-600">Listings</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="hover:text-blue-600">Contact</a>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;