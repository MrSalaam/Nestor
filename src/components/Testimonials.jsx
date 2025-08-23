import { FaStar } from "react-icons/fa";

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
  {
    id: 5,
    name: "Emma Watson",
    role: "Home Buyer",
    image: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7",
    text: "Exceptional service and guidance! Made buying a house easy and enjoyable.",
    rating: 5,
  },
  {
    id: 6,
    name: "Liam Johnson",
    role: "Investor",
    image: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c",
    text: "Amazing experience. They helped me invest wisely and efficiently.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Decorative floating shapes */}
      <div className="absolute -top-16 -left-16 w-40 h-40 bg-blue-100 rounded-full opacity-40 blur-3xl"></div>
      <div className="absolute -bottom-24 -right-12 w-60 h-60 bg-pink-100 rounded-full opacity-30 blur-3xl"></div>

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          What Our Clients Say
        </h2>
        <p className="text-gray-600 text-base">
          Real experiences from people who found their dream homes and investments with us.
        </p>
      </div>

      {/* Masonry / Bento Grid with overlap */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-8">
        {testimonials.map((t, i) => (
          <div
            key={t.id}
            className={`relative bg-white rounded-3xl p-6 shadow-lg transform transition hover:-translate-y-3 hover:scale-105 duration-500`}
            style={{
              height: `${220 + t.text.length * 1.1}px`, // irregular heights
              marginTop: i % 2 === 0 ? '0px' : '20px', // staggered vertical offset
              zIndex: 10 - i,
            }}
          >
            <img
              src={t.image}
              alt={t.name}
              className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-white shadow-md"
            />
            <h3 className="text-lg font-semibold text-gray-900">{t.name}</h3>
            <p className="text-gray-500 text-sm mb-3">{t.role}</p>
            <div className="flex mb-3 text-yellow-400">
              {[...Array(t.rating)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">{t.text}</p>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="text-center mt-16">
        <button className="bg-blue-600 text-white px-8 py-3 rounded-full text-base font-semibold shadow-md hover:bg-blue-700 hover:scale-105 transition-transform duration-300">
          Share Your Experience
        </button>
      </div>
    </section>
  );
}
