import { FaBed, FaBath, FaRulerCombined } from "react-icons/fa";

const properties = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800",
    price: "$450,000",
    title: "Modern Family House",
    location: "Los Angeles, CA",
    beds: 4,
    baths: 3,
    sqft: "2,400",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800",
    price: "$320,000",
    title: "Luxury Apartment",
    location: "New York, NY",
    beds: 2,
    baths: 2,
    sqft: "1,200",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800",
    price: "$680,000",
    title: "Elegant Villa",
    location: "Miami, FL",
    beds: 5,
    baths: 4,
    sqft: "3,500",
  },
];

export default function FeaturedProperties() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block bg-violet-100 text-violet-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            ⭐ Featured Listings
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Handpicked Properties
          </h2>
          <p className="text-xl text-gray-600">
            Curated selections that match your lifestyle
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <div
              key={property.id}
              className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 cursor-pointer border border-gray-100 group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-5 py-2 rounded-xl font-bold shadow-lg backdrop-blur-sm">
                  {property.price}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {property.title}
                </h3>
                <p className="text-gray-600 mb-4">{property.location}</p>
                <div className="flex justify-between text-gray-700">
                  <div className="flex items-center gap-2">
                    <FaBed className="text-violet-600" />
                    <span>{property.beds} Beds</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaBath className="text-violet-600" />
                    <span>{property.baths} Baths</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaRulerCombined className="text-violet-600" />
                    <span>{property.sqft} sqft</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
