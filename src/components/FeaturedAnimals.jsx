import Image from "next/image";
import AnimalCard from "./AnimalCard";

const FeaturedAnimals = async () => {
  const res = await fetch("https://qurbani-hat-saz.vercel.app/data.json");
  const data = await res.json();
  const homeAnimals = data.slice(0, 4);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-center md:text-left mt-10">
        Featured Animals
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center pt-5 ">
        {homeAnimals.map((animal) => (
          <AnimalCard key={animal.id} animal={animal} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedAnimals;
