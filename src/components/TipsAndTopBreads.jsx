"use client";

const TipsAndTopBreads = () => {
  return (
    <div className="container mx-auto py-16 px-4 space-y-16">
      {/* Header */}
      <div className="text-center animate__animated animate__fadeInDown">
        <h2 className="text-4xl font-bold text-green-700">
          Qurbani Tips & Top Breeds
        </h2>
        <p className="text-gray-500 mt-2">
          Smart tips and best animals for your Qurbani selection
        </p>
      </div>

      {/* Tips Section */}
      <div className="grid md:grid-cols-3 gap-8">
        <div className="p-6 rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 animate__animated animate__fadeInUp">
          <h3 className="text-xl font-semibold text-green-700 mb-2">
            🩺 Health First
          </h3>
          <p className="text-gray-600">
            Check eyes, skin, teeth, and movement before buying any animal.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 animate__animated animate__fadeInUp">
          <h3 className="text-xl font-semibold text-green-700 mb-2">
            ⚖️ Proper Weight
          </h3>
          <p className="text-gray-600">
            Balanced weight ensures better meat quality and value.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 animate__animated animate__fadeInUp">
          <h3 className="text-xl font-semibold text-green-700 mb-2">
            🕒 Early Booking
          </h3>
          <p className="text-gray-600">
            Early purchase gives better price and more options.
          </p>
        </div>
      </div>

      {/* Breeds Section */}
      <div>
        <h3 className="text-3xl font-bold text-center mb-10 text-green-700 animate__animated animate__fadeIn">
          Top Breeds
        </h3>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            "Brahman Cow",
            "Sahiwal Cow",
            "Holstein Friesian",
            "Black Bengal Goat",
          ].map((breed, i) => (
            <div
              key={i}
              className="p-5 rounded-xl bg-green-50 text-center shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate__animated animate__zoomIn"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <p className="font-semibold text-gray-700">{breed}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default TipsAndTopBreads;
