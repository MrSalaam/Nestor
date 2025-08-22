import { motion } from "framer-motion";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Olivia Parker",
    role: "Home Buyer",
    image: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe",
    text: "Finding my dream home was stress-free thanks to their professional team. Highly recommend!",
    rating: 5,
  },
  {
    id: 2,
    name: "Daniel Wilson",
    role: "Investor",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    text: "Great experience! Their market knowledge and attention to detail made everything smooth.",
    rating: 4,
  },
  {
    id: 3,
    name: "Sophia Martinez",
    role: "Property Seller",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    text: "They sold my property faster than I expected and at a great price. Excellent service!",
    rating: 5,
  },
  {
    id: 4,
    name: "James Brown",
    role: "Investor",
    image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6",
    text: "Professional, attentive, and effective. Made everything smooth and simple.",
    rating: 5,
  },
];

export default function Testimonials() {
  // Duplicate array to create seamless infinite scroll
  const scrollTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-20 relative bg-white dark:from-gray-800 dark:to-gray-900 overflow-hidden">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 px-4">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
          What Our Clients Say
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg">
          Real experiences from people who found their dream homes and investments with us.
        </p>
      </div>

      {/* Continuous Scroll Container */}
      <motion.div
        className="flex gap-6"
        style={{ display: "flex" }}
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 40,
          ease: "linear",
        }}
      >
        {scrollTestimonials.map((testimonial, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-72 sm:w-80 md:w-80 bg-white dark:from-gray-800 dark:to-gray-700 shadow-lg rounded-2xl p-8 text-center flex flex-col items-center"
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-24 h-24 rounded-full object-cover mb-5 border-4 border-gray-100 dark:border-gray-700"
            />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
              {testimonial.name}
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">{testimonial.role}</p>
            <div className="flex justify-center mb-4 text-yellow-400">
              {[...Array(testimonial.rating)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
              “{testimonial.text}”
            </p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
