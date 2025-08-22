import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaArrowUp, FaCommentDots } from "react-icons/fa";

export default function CTAWidget() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      {/* Sticky CTA Button */}
      <motion.a
        href="#contact"
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-24 right-6 bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg z-50 hover:bg-blue-700 transition"
      >
        Book a Consultation
      </motion.a>

      {/* Chat Widget Placeholder */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg z-50 cursor-pointer"
      >
        <FaCommentDots />
      </motion.div>

      {/* Scroll to Top */}
      {showTop && (
        <motion.button
          whileHover={{ scale: 1.1 }}
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 bg-gray-800 text-white p-3 rounded-full shadow-lg z-50"
        >
          <FaArrowUp />
        </motion.button>
      )}
    </>
  );
}