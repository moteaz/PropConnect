"use client";

import { useState } from "react";
import { FaSearch, FaMapMarkerAlt } from "react-icons/fa";

export default function Hero() {
  const [searchData, setSearchData] = useState({ location: "", type: "all" });

  return (
    <section className="relative bg-gradient-to-br from-violet-600 via-indigo-600 to-purple-700 text-white py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0YzMuMzEgMCA2LTIuNjkgNi02cy0yLjY5LTYtNi02LTYgMi42OS02IDYgMi42OSA2IDYgNnptMC00YzEuMSAwIDItLjkgMi0ycy0uOS0yLTItMi0yIC45LTIgMiAuOSAyIDIgMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-white rounded-full filter blur-3xl opacity-10"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-indigo-300 rounded-full filter blur-3xl opacity-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm font-semibold">
              🏡 Trusted by 50,000+ Users
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            Find Your Dream Property
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-200 to-white">
              Effortlessly
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-violet-100 mb-8 max-w-3xl mx-auto">
            AI-powered search, verified listings, and community insights all in one place
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white/20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative md:col-span-2">
              <FaMapMarkerAlt className="absolute left-4 top-4 text-gray-400" />
              <input
                type="text"
                placeholder="Enter location or city"
                value={searchData.location}
                onChange={(e) => setSearchData({ ...searchData, location: e.target.value })}
                className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-violet-500 text-gray-800 text-lg"
              />
            </div>
            <select
              value={searchData.type}
              onChange={(e) => setSearchData({ ...searchData, type: e.target.value })}
              className="px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-violet-500 text-gray-800 text-lg"
            >
              <option value="all">All Types</option>
              <option value="house">House</option>
              <option value="apartment">Apartment</option>
              <option value="condo">Condo</option>
              <option value="villa">Villa</option>
            </select>
            <button className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-violet-700 hover:to-indigo-700 transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:scale-105">
              <FaSearch />
              Search
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
          <button className="bg-white text-violet-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-violet-50 transition-all shadow-xl hover:shadow-2xl hover:scale-105">
            Explore Properties
          </button>
          <button className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-violet-600 transition-all">
            List Your Property
          </button>
        </div>
      </div>
    </section>
  );
}
