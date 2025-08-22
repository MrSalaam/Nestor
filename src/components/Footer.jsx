import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-300 py-16">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-8">

        {/* Company Info */}
        <motion.div whileHover={{ scale: 1.02 }}>
          <h2 className="text-2xl font-bold text-gray-800  mb-4">Nestor<span className="text-blue-700">Pro.</span></h2>
          <p className="text-gray-800 ">
            We help you find your dream home and provide expert advice on real estate investments. Trusted by thousands of happy clients.
          </p>
          <div className="flex gap-4 mt-4">
            <motion.a href="#" whileHover={{ scale: 1.2 }}><FaFacebookF /></motion.a>
            <motion.a href="#" whileHover={{ scale: 1.2 }}><FaTwitter /></motion.a>
            <motion.a href="#" whileHover={{ scale: 1.2 }}><FaLinkedinIn /></motion.a>
            <motion.a href="#" whileHover={{ scale: 1.2 }}><FaInstagram /></motion.a>
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div whileHover={{ scale: 1.02 }}>
          <h3 className="text-xl font-semibold text-blue-700  mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#hero" className="hover:text-black transition text-black">Home</a></li>
            <li><a href="#services" className="hover:text-black transition text-black">Services</a></li>
            <li><a href="#team" className="hover:text-black transition text-black">Agents</a></li>
            <li><a href="#testimonials" className="hover:text-black transition text-black">Testimonials</a></li>
            <li><a href="#contact" className="hover:text-black transition text-black">Contact</a></li>
          </ul>
        </motion.div>

        {/* Resources */}
        <motion.div whileHover={{ scale: 1.02 }}>
          <h3 className="text-xl font-semibold text-blue-700 mb-4">Resources</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-black transition text-black">Blog</a></li>
            <li><a href="#" className="hover:text-black transition text-black">FAQs</a></li>
            <li><a href="#" className="hover:text-black transition text-black">Market Reports</a></li>
            <li><a href="#" className="hover:text-black transition text-black">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-black transition text-black">Terms of Service</a></li>
          </ul>
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div whileHover={{ scale: 1.02 }}>
          <h3 className="text-xl font-semibold text-white mb-4">Subscribe</h3>
          <p className="text-gray-800 mb-4">
            Get property alerts, market insights, and exclusive offers directly to your inbox.
          </p>
          <form className="flex flex-col gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="p-3 rounded border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-800 dark:text-white"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded font-semibold transition">
              Subscribe
            </button>
          </form>
        </motion.div>
      </div>

      <div className="text-center  pt-6 text-gray-800">
        &copy; {new Date().getFullYear()} All rights reserved.
      </div>
    </footer>
  );
}