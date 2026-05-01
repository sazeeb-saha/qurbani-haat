import AnimalCard from "@/components/AnimalCard";
import React from "react";

const AllAnimalPage = async () => {
  const res = await fetch("https://qurbani-hat-saz.vercel.app/data.json", {
    cache: "no-store",
  });
  const data = await res.json();
  return (
    <div className="container mx-auto ">
      <h2 className="text-2xl font-bold mb-4 text-center md:text-left mt-10">
        Featured Animals
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center pt-5 ">
        {data.map((animal) => (
          <AnimalCard key={animal.id} animal={animal} />
        ))}
      </div>
    </div>
  );
};

export default AllAnimalPage;
