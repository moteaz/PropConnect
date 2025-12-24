import { FaSearch, FaHome, FaHandshake, FaKey } from "react-icons/fa";

const steps = [
  {
    icon: FaSearch,
    title: "Search Properties",
    description: "Browse thousands of listings tailored to your preferences",
  },
  {
    icon: FaHome,
    title: "Visit & Inspect",
    description: "Schedule tours and explore properties in person",
  },
  {
    icon: FaHandshake,
    title: "Make an Offer",
    description: "Connect with owners and negotiate the best deal",
  },
  {
    icon: FaKey,
    title: "Move In",
    description: "Complete paperwork and get your keys to your new home",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Your Journey to Home Ownership</h2>
          <p className="text-xl text-gray-600">Simple, transparent, and designed for you</p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-violet-200 via-indigo-200 to-violet-200 -translate-y-1/2"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="relative inline-block mb-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-violet-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl rotate-3 hover:rotate-6">
                    <step.icon className="text-4xl text-white" />
                  </div>
                  <div className="absolute -top-3 -right-3 w-12 h-12 bg-white border-4 border-violet-600 text-violet-600 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
