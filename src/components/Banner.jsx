import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div
      className="relative w-full min-h-[60vh] flex items-center justify-center px-6 md:px-20 
    bg-linear-to-b from-green-100 via-green-50 to-white overflow-hidden"
    >
      <div className="max-w-5xl text-center z-10">
        <p className="inline-block bg-green-200 text-green-800 px-4 py-1 rounded-full text-sm mb-4">
          🌙 Eid-ul-Adha Special
        </p>

        <h1 className="text-4xl md:text-6xl font-bold text-green-900 leading-tight">
          Find the Perfect Animal for <br />
          <span className="text-green-600">Qurbani 2026</span>
        </h1>

        <p className="mt-6 text-gray-600 text-lg max-w-2xl mx-auto">
          Browse cows, goats, and more from trusted farmers. Book your Qurbani
          animal easily and securely.
        </p>

        <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
          <button>
            <Link
              href={"/animals"}
              className="bg-green-600 hover:bg-green-700 text-white font-medium px-12 py-3 rounded-full transition"
            >
              Browse Animals
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
