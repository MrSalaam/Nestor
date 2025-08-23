import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AdvancedSearch = () => {
  const properties = [
    { id: 1, title: "Luxury Villa in Lagos", price: 450000, location: "Lagos", type: "Villa", bedrooms: 4 },
    { id: 2, title: "Modern Apartment in Abuja", price: 300000, location: "Abuja", type: "Apartment", bedrooms: 3 },
    { id: 3, title: "Cozy Bungalow in Ibadan", price: 180000, location: "Ibadan", type: "Bungalow", bedrooms: 2 },
    { id: 4, title: "Penthouse in Victoria Island", price: 700000, location: "Lagos", type: "Penthouse", bedrooms: 5 },
    { id: 5, title: "Affordable Flat in Yaba", price: 150000, location: "Lagos", type: "Apartment", bedrooms: 2 },
    { id: 6, title: "Detached Duplex in Abuja", price: 400000, location: "Abuja", type: "Duplex", bedrooms: 4 },
    { id: 7, title: "Mini Flat in Ibadan", price: 100000, location: "Ibadan", type: "Apartment", bedrooms: 1 },
    { id: 8, title: "Luxury Mansion in Lekki", price: 900000, location: "Lagos", type: "Villa", bedrooms: 6 },
    { id: 9, title: "Studio Apartment in Abuja", price: 120000, location: "Abuja", type: "Apartment", bedrooms: 1 },
    { id: 10, title: "4-Bed Duplex in Ibadan", price: 350000, location: "Ibadan", type: "Duplex", bedrooms: 4 },
  ];

  const [filters, setFilters] = useState({
    location: "",
    priceRange: [0, 1000000],
    type: "",
    bedrooms: "",
  });
  const [filteredProperties, setFilteredProperties] = useState(properties);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const propertiesPerPage = 2;

  useEffect(() => {
    const timer = setTimeout(() => {
      applyFilters();
    }, 400);
    return () => clearTimeout(timer);
  });

  const applyFilters = () => {
    const result = properties.filter((property) => {
      return (
        property.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (filters.location === "" || property.location === filters.location) &&
        (filters.type === "" || property.type === filters.type) &&
        (filters.bedrooms === "" || property.bedrooms >= parseInt(filters.bedrooms)) &&
        property.price >= filters.priceRange[0] &&
        property.price <= filters.priceRange[1]
      );
    });
    setFilteredProperties(result);
    setCurrentPage(1);
  };

  // Pagination
  const indexOfLast = currentPage * propertiesPerPage;
  const indexOfFirst = indexOfLast - propertiesPerPage;
  const currentProperties = filteredProperties.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredProperties.length / propertiesPerPage);

  return (
    <section id="search" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Find Your Dream Property</h2>

      {/* Filters */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by title"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-gray-300 p-3 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none w-full"
        />
        <select
          value={filters.location}
          onChange={(e) => setFilters({ ...filters, location: e.target.value })}
          className="border border-gray-300 p-3 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none w-full"
        >
          <option value="">Location</option>
          <option value="Lagos">Lagos</option>
          <option value="Abuja">Abuja</option>
          <option value="Ibadan">Ibadan</option>
        </select>
        <select
          value={filters.type}
          onChange={(e) => setFilters({ ...filters, type: e.target.value })}
          className="border border-gray-300 p-3 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none w-full"
        >
          <option value="">Property Type</option>
          <option value="Villa">Villa</option>
          <option value="Apartment">Apartment</option>
          <option value="Bungalow">Bungalow</option>
          <option value="Penthouse">Penthouse</option>
        </select>
        <select
          value={filters.bedrooms}
          onChange={(e) => setFilters({ ...filters, bedrooms: e.target.value })}
          className="border border-gray-300 p-3 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none w-full"
        >
          <option value="">Bedrooms</option>
          <option value="1">1+</option>
          <option value="2">2+</option>
          <option value="3">3+</option>
          <option value="4">4+</option>
        </select>
      </div>

      {/* Search Button */}
      <div className="flex justify-center mb-8">
        <button
          onClick={applyFilters}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300"
        >
          Search
        </button>
      </div>

      {/* Property Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <AnimatePresence>
          {currentProperties.map((property) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="border rounded-xl p-5 shadow hover:shadow-lg transition-shadow duration-300 bg-white"
            >
              <h3 className="text-xl font-bold mb-2">{property.title}</h3>
              <p className="text-gray-500 mb-1">{property.location}</p>
              <p className="text-blue-600 font-semibold mb-1">₦{property.price.toLocaleString()}</p>
              <p className="text-gray-400 text-sm">{property.type} • {property.bedrooms} Bedrooms</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-2 mt-8 flex-wrap">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-4 py-2 border rounded-lg mb-2 font-medium ${
              currentPage === i + 1
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </section>
  );
};

export default AdvancedSearch;
