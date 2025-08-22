import React from "react";
import { motion } from "framer-motion";
import { Home, Search, Building2, BarChart3, Users, Briefcase } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Property Listings",
    description: "Browse thousands of verified properties for sale or rent in prime locations.",
    icon: <Home className="w-8 h-8 text-blue-600" />,
  },
  {
    id: 2,
    title: "Advanced Search",
    description: "Use smart filters and AI-based recommendations to find your dream property faster.",
    icon: <Search className="w-8 h-8 text-blue-600" />,
  },
  {
    id: 3,
    title: "Property Management",
    description: "Manage your real estate portfolio with our intuitive and powerful tools.",
    icon: <Building2 className="w-8 h-8 text-blue-600" />,
  },
  {
    id: 4,
    title: "Market Analysis",
    description: "Stay ahead with real-time insights, trends, and property valuation reports.",
    icon: <BarChart3 className="w-8 h-8 text-blue-600" />,
  },
  {
    id: 5,
    title: "Expert Agents",
    description: "Connect with our top-rated real estate agents for personalized advice and deals.",
    icon: <Users className="w-8 h-8 text-blue-600" />,
  },
  {
    id: 6,
    title: "Investment Consulting",
    description: "Plan and maximize your real estate investments with expert strategies.",
    icon: <Briefcase className="w-8 h-8 text-blue-600" />,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.15, duration: 0.6 },
  }),
};

const Services = () => {
  return (
    <section id="services" className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide a wide range of real estate solutions to help you buy, sell, or manage properties effortlessly.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="bg-white shadow-lg rounded-xl p-8 text-center hover:shadow-2xl transition duration-300"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
              variants={cardVariants}
            >
              <div className="flex justify-center mb-6">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <motion.a
            href="#"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-blue-700 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore All Services
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Services;
