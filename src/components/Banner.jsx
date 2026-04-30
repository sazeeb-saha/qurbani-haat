import React from "react";

const Hero = () => {
  return (
    <div
      className="relative w-full min-h-[80vh] flex items-center justify-center px-6 md:px-20 
    bg-linear-to-b from-green-100 via-green-50 to-white overflow-hidden"
    >
      <div className="max-w-5xl text-center z-10">
        {/* Badge */}
        <p className="inline-block bg-green-200 text-green-800 px-4 py-1 rounded-full text-sm mb-4">
          🌙 Eid-ul-Adha Special
        </p>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold text-green-900 leading-tight">
          Find the Perfect Animal for <br />
          <span className="text-green-600">Qurbani 2026</span>
        </h1>

        {/* Description */}
        <p className="mt-6 text-gray-600 text-lg max-w-2xl mx-auto">
          Browse cows, goats, and more from trusted farmers. Book your Qurbani
          animal easily and securely.
        </p>

        <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full transition">
            Browse Animals
          </button>

          <button className="border border-green-600 text-green-700 px-6 py-3 rounded-full hover:bg-green-100 transition">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
