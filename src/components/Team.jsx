import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";

const agents = [
  { id: 1, name: "Sarah Johnson", role: "Senior Realtor", image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e" },
  { id: 3, name: "Emily Davis", role: "Client Advisor", image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1" },
  { id: 4, name: "James Brown", role: "Investment Specialist", image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6" },
];

export default function Team() {
  const [selectedAgent, setSelectedAgent] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", date: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.date) {
      setError("Please fill in all fields.");
      return;
    }
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      setSelectedAgent(null);
      setFormData({ name: "", email: "", date: "" });
    }, 2000);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto text-center mb-12 px-4 sm:px-6">
        <h2 className="text-3xl font-bold mb-4">Meet Our Expert Agents</h2>
        <p className="text-gray-600">
          Our dedicated team is here to help you find your dream property.
        </p>
      </div>

     {/* Agent Cards */}
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 sm:px-6 justify-items-center">
  {agents.map((agent) => (
    <div key={agent.id} className="relative bg-white rounded-lg shadow-lg overflow-hidden group w-full max-w-xs">
      <img
        src={agent.image}
        alt={agent.name}
        className="w-full h-72 sm:h-64 md:h-72 object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{agent.name}</h3>
        <p className="text-gray-500 text-sm">{agent.role}</p>
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition duration-300">
        <div className="flex space-x-4 mb-4 text-white text-xl">
          <a href="#" className="hover:text-blue-400"><FaLinkedin /></a>
          <a href="#" className="hover:text-blue-300"><FaTwitter /></a>
          <a href="#" className="hover:text-green-400"><FaWhatsapp /></a>
        </div>
        <button
          onClick={() => setSelectedAgent(agent)}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Book Appointment
        </button>
      </div>
    </div>
  ))}
</div>


      {/* Modal */}
      <AnimatePresence>
        {selectedAgent && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md max-h-full overflow-y-auto"
            >
              <h3 className="text-xl font-bold mb-4">
                Book Appointment with {selectedAgent.name}
              </h3>
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="border w-full px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData.name}
                  onChange={handleInputChange}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="border w-full px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                <input
                  type="date"
                  name="date"
                  className="border w-full px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData.date}
                  onChange={handleInputChange}
                />

                {error && <p className="text-red-500 text-sm">{error}</p>}
                {success && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-green-600 text-sm"
                  >
                    Appointment booked!
                  </motion.p>
                )}

                <div className="flex flex-col sm:flex-row gap-4 mt-2">
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                  >
                    Confirm
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedAgent(null)}
                    className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}