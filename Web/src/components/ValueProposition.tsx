import { FaShieldAlt, FaBrain, FaUsers, FaChartLine } from "react-icons/fa";

const features = [
  {
    icon: FaShieldAlt,
    title: "Verified Listings",
    description: "Every property is verified by our team to ensure authenticity and quality",
    color: "from-violet-500 to-purple-600",
  },
  {
    icon: FaBrain,
    title: "AI Recommendations",
    description: "Smart algorithms match you with properties that fit your preferences perfectly",
    color: "from-indigo-500 to-blue-600",
  },
  {
    icon: FaUsers,
    title: "Community Insights",
    description: "Get real neighborhood data and reviews from actual residents",
    color: "from-blue-500 to-cyan-600",
  },
  {
    icon: FaChartLine,
    title: "Market Analytics",
    description: "Access real-time market trends and property value predictions",
    color: "from-purple-500 to-pink-600",
  },
];

export default function ValueProposition() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-violet-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-violet-200 rounded-full filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-200 rounded-full filter blur-3xl opacity-20 translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Why Choose PropertyConnect?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">We're not just another real estate platform. We're your intelligent property partner.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 border border-gray-100">
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="text-3xl text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
