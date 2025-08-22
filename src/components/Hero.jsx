import React from "react";
import { motion } from "framer-motion";
import heroImage from '../assets/hero-image.jpg';

const Hero = () => {
  return (
    <section
      id="home"
      className="bg-white min-h-screen flex items-center pt-24 md:pt-32"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6 sm:px-4">
        
        {/* Left Column - Text */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left space-y-6"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
            Find Your Perfect Home <span className="text-blue-600">Easily</span>
          </h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-md mx-auto md:mx-0">
            Discover properties tailored to your needs with our advanced search and expert guidance.
          </p>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 bg-white shadow-lg rounded-xl flex flex-col sm:flex-row items-center gap-3 px-4 py-3 max-w-lg mx-auto md:mx-0"
          >
            <input
              type="text"
              placeholder="Search by city, neighborhood..."
              className="flex-1 px-3 py-2 text-gray-700 focus:outline-none text-base rounded-md w-full"
            />
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300 w-full sm:w-auto">
              Search
            </button>
          </motion.div>
        </motion.div>

        {/* Right Column - Image */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center md:justify-end"
        >
          <img
            src={heroImage}
            alt="Modern House"
            className="rounded-2xl shadow-lg w-full max-w-md object-cover"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;