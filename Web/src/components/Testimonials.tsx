import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Homeowner",
    image: "https://i.pravatar.cc/150?img=1",
    rating: 5,
    text: "PropertyConnect made finding my dream home so easy! The platform is intuitive and the support team was incredibly helpful.",
  },
  {
    name: "Michael Chen",
    role: "Investor",
    image: "https://i.pravatar.cc/150?img=2",
    rating: 5,
    text: "I've found multiple investment properties through this platform. The search filters and detailed listings are top-notch.",
  },
  {
    name: "Emily Rodriguez",
    role: "Renter",
    image: "https://i.pravatar.cc/150?img=3",
    rating: 5,
    text: "Best rental experience ever! Found the perfect apartment in my budget within days. Highly recommend PropertyConnect.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-br from-violet-50 via-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            💬 Success Stories
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Loved by Our Community
          </h2>
          <p className="text-xl text-gray-600">
            Real stories from real people who found their dream homes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-violet-100 to-indigo-100 rounded-full filter blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-300 -translate-y-1/2 translate-x-1/2"></div>
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mr-4 border-4 border-violet-100"
                />
                <div>
                  <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 italic relative z-10">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
