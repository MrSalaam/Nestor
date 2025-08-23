import { useState } from "react";
import { motion } from "framer-motion";
import contactImage from "../assets/contact-image.jpg"; // replace with your image

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
    contactMethod: "",
    budget: "",
    newsletter: false,
    propertyValue: "",
    mortgageTerm: "",
    mortgageRate: "",
  });

  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      setErrors({});
      setSuccess(true);
      setTimeout(() => setSuccess(false), 5000);
      setFormData({
        name: "",
        email: "",
        phone: "",
        interest: "",
        message: "",
        contactMethod: "",
        budget: "",
        newsletter: false,
        propertyValue: "",
        mortgageTerm: "",
        mortgageRate: "",
      });
    } else {
      setErrors(validationErrors);
    }
  };

  const calculateMortgage = () => {
    const P = Number(formData.propertyValue || 0);
    const r = Number(formData.mortgageRate || 0) / 100 / 12;
    const n = Number(formData.mortgageTerm || 0) * 12;
    if (!P || !r || !n) return 0;
    const monthly = (P * r) / (1 - Math.pow(1 + r, -n));
    return monthly.toFixed(2);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Column: Image / Info */}
        <motion.div
          className="hidden lg:flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-full max-w-md rounded-2xl overflow-hidden shadow-xl">
            <img
              src={contactImage}
              alt="Contact Illustration"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 p-6 bg-gradient-to-t from-white/90 to-transparent w-full">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Reach Out Anytime
              </h3>
              <p className="text-gray-600 text-sm">
                Our team is ready to assist you with property inquiries, valuations, and expert advice.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Form */}
        <motion.div
          className="bg-white rounded-2xl shadow-lg p-8 lg:p-10"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center lg:text-left">
            Get in Touch
          </h2>

          {success && (
            <motion.div
              className="bg-green-100 text-green-700 p-4 rounded mb-6 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              Thank you! Your submission has been received.
            </motion.div>
          )}

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name *"
                className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email *"
                className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone"
                className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              />
              <select
                name="interest"
                value={formData.interest}
                onChange={handleChange}
                className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              >
                <option value="">Property Interest</option>
                <option value="buying">Buying</option>
                <option value="selling">Selling</option>
                <option value="investment">Investment</option>
              </select>
            </div>

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />

            <div className="grid md:grid-cols-2 gap-4">
              <select
                name="contactMethod"
                value={formData.contactMethod}
                onChange={handleChange}
                className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              >
                <option value="">Preferred Contact Method</option>
                <option value="email">Email</option>
                <option value="phone">Phone</option>
                <option value="whatsapp">WhatsApp</option>
              </select>
              <input
                type="text"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                placeholder="Budget Range"
                className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              />
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                name="newsletter"
                checked={formData.newsletter}
                onChange={handleChange}
                className="w-4 h-4 rounded focus:ring-2 focus:ring-blue-400"
              />
              <label className="text-gray-700">
                Subscribe to property alerts & newsletter
              </label>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mt-4">
              <input
                type="number"
                name="propertyValue"
                value={formData.propertyValue}
                onChange={handleChange}
                placeholder="Property Value ($)"
                className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              />
              <input
                type="number"
                name="mortgageTerm"
                value={formData.mortgageTerm}
                onChange={handleChange}
                placeholder="Term (Years)"
                className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              />
              <input
                type="number"
                name="mortgageRate"
                value={formData.mortgageRate}
                onChange={handleChange}
                placeholder="Interest Rate (%)"
                className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              />
            </div>

            {formData.propertyValue && formData.mortgageTerm && formData.mortgageRate && (
              <p className="mt-2 text-gray-700">
                Estimated Monthly Payment: ${calculateMortgage()}
              </p>
            )}

            <button
              type="submit"
              className="w-full mt-6 bg-blue-600 text-white p-3 rounded font-semibold hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
