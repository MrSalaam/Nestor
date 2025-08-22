import { useState } from "react";
import { motion } from "framer-motion";

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

  // Simple front-end validation
  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      setErrors({});
      setSuccess(true);

      // Placeholder for API integration
      try {
        // Example: POST formData to backend API
        await fetch("https://your-api-endpoint.com/leads", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
      } catch (err) {
        console.error("API error", err);
      }

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

  // Simple mortgage calculation
  const calculateMortgage = () => {
    const P = Number(formData.propertyValue || 0);
    const r = Number(formData.mortgageRate || 0) / 100 / 12;
    const n = Number(formData.mortgageTerm || 0) * 12;
    if (!P || !r || !n) return 0;
    const monthly = (P * r) / (1 - Math.pow(1 + r, -n));
    return monthly.toFixed(2);
  };

  return (
    <section className="py-20 bg-white dark:from-gray-800 dark:to-gray-900">
      <motion.div
        className="max-w-5xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 text-center">
          Get in Touch & Stay Updated
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
          {/* Name & Email */}
          <div className="grid md:grid-cols-2 gap-4">
            <motion.div whileHover={{ scale: 1.02 }}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name *"
                className="w-full p-3 rounded border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:text-white transition"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }}>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email *"
                className="w-full p-3 rounded border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:text-white transition"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </motion.div>
          </div>

          {/* Phone & Property Interest */}
          <div className="grid md:grid-cols-2 gap-4">
            <motion.input
              whileHover={{ scale: 1.02 }}
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone"
              className="w-full p-3 rounded border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:text-white transition"
            />
            <motion.select
              whileHover={{ scale: 1.02 }}
              name="interest"
              value={formData.interest}
              onChange={handleChange}
              className="w-full p-3 rounded border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:text-white transition"
            >
              <option value="">Property Interest</option>
              <option value="buying">Buying</option>
              <option value="selling">Selling</option>
              <option value="investment">Investment</option>
            </motion.select>
          </div>

          {/* Message */}
          <motion.textarea
            whileHover={{ scale: 1.02 }}
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            className="w-full p-3 rounded border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:text-white transition"
          />

          {/* Contact Method & Budget */}
          <div className="grid md:grid-cols-2 gap-4">
            <motion.select
              whileHover={{ scale: 1.02 }}
              name="contactMethod"
              value={formData.contactMethod}
              onChange={handleChange}
              className="w-full p-3 rounded border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:text-white transition"
            >
              <option value="">Preferred Contact Method</option>
              <option value="email">Email</option>
              <option value="phone">Phone</option>
              <option value="whatsapp">WhatsApp</option>
            </motion.select>

            <motion.input
              whileHover={{ scale: 1.02 }}
              type="text"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              placeholder="Budget Range"
              className="w-full p-3 rounded border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:text-white transition"
            />
          </div>

          {/* Newsletter Signup */}
          <motion.div whileHover={{ scale: 1.02 }} className="flex items-center gap-2">
            <input
              type="checkbox"
              name="newsletter"
              checked={formData.newsletter}
              onChange={handleChange}
              className="w-4 h-4 rounded focus:ring-2 focus:ring-blue-400"
            />
            <label className="text-gray-700 dark:text-gray-300">
              Subscribe to property alerts & newsletter
            </label>
          </motion.div>

          {/* Property Valuation / Mortgage Calculator */}
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <motion.input
              whileHover={{ scale: 1.02 }}
              type="number"
              name="propertyValue"
              value={formData.propertyValue}
              onChange={handleChange}
              placeholder="Property Value ($)"
              className="w-full p-3 rounded border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:text-white transition"
            />
            <motion.input
              whileHover={{ scale: 1.02 }}
              type="number"
              name="mortgageTerm"
              value={formData.mortgageTerm}
              onChange={handleChange}
              placeholder="Term (Years)"
              className="w-full p-3 rounded border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:text-white transition"
            />
            <motion.input
              whileHover={{ scale: 1.02 }}
              type="number"
              name="mortgageRate"
              value={formData.mortgageRate}
              onChange={handleChange}
              placeholder="Interest Rate (%)"
              className="w-full p-3 rounded border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:text-white transition"
            />
          </div>

          {formData.propertyValue && formData.mortgageTerm && formData.mortgageRate && (
            <p className="mt-2 text-gray-700 dark:text-gray-300">
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
    </section>
  );

  
}
