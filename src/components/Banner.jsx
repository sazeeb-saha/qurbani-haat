import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div
      className="relative w-full min-h-[60vh] flex items-center justify-center px-6 md:px-20
    bg-linear-to-b from-green-100 via-green-50 to-white overflow-hidden"
    >
      <div className="max-w-5xl text-center z-10 ">
        <div className="animate__animated animate__fadeInDown">
          <p className="inline-block bg-green-200 text-green-800 px-4 py-1 rounded-full text-sm mb-4 ">
            🌙 Eid-ul-Adha Special
          </p>

          <h1 className="text-4xl md:text-6xl font-bold text-green-900 leading-tight ">
            Find the Perfect Animal for <br />
            <span className="text-green-600">Qurbani 2026</span>
          </h1>
        </div>

        <p className="mt-6 text-gray-600 text-lg max-w-2xl mx-auto animate__animated animate__fadeInUp">
          Browse cows, goats, and more from trusted farmers. Book your Qurbani
          animal easily and securely.
        </p>

        <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center hover:scale-105 transition-transform duration-300 animate__animated animate__fadeInUp">
          <button>
            <Link
              href={"/animals"}
              className=" bg-green-600 hover:bg-green-700 text-white font-medium px-12 py-3 rounded-full "
            >
              Browse Animals
            </Link>
          </button>
        </div>
      </div>
    </div>

    // <div className="relative overflow-hidden">
    //   <div className="absolute inset-0 bg-linear-to-br from-green-900 via-green-700 to-emerald-500 opacity-95"></div>

    //   <div className="absolute -top-32 -left-32 w-96 h-96 bg-green-300 rounded-full blur-3xl opacity-30"></div>
    //   <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-emerald-300 rounded-full blur-3xl opacity-30"></div>

    //   <div className="relative z-10 container mx-auto min-h-[80vh] flex flex-col justify-center items-center text-center px-4 text-white">
    //     <h1 className="text-4xl md:text-6xl font-bold leading-tight animate__animated animate__fadeInDown">
    //       Find Your Perfect <br />
    //       <span className="text-yellow-300">Qurbani Animal</span>
    //     </h1>

    //     <p className="mt-6 text-lg md:text-xl text-green-100 max-w-2xl animate__animated animate__fadeInUp">
    //       A trusted marketplace for buying healthy, premium livestock for
    //       Qurbani. Explore cows, goats, and more with ease.
    //     </p>

    //     <div className="mt-8 flex gap-4 animate__animated animate__fadeInUp">
    //       <Link
    //         href="/animals"
    //         className="bg-white text-green-800 px-6 py-3 rounded-full font-semibold hover:bg-green-100 transition"
    //       >
    //         Browse Animals
    //       </Link>

    //       <Link
    //         href="/login"
    //         className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-green-800 transition"
    //       >
    //         Get Started
    //       </Link>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Hero;
