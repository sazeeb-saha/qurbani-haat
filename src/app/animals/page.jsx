import AnimalCard from "@/components/AnimalCard";
import SortSelect from "@/components/SortSelect";

const AllAnimalPage = async ({ searchParams }) => {
  const res = await fetch("https://qurbani-hat-saz.vercel.app/data.json", {
    cache: "no-store",
  });
  const data = await res.json();

  const params = await searchParams;
  const sort = params?.sort;
  let sortedData = [...data];

  if (sort === "low-to-high") {
    sortedData.sort((a, b) => Number(a.price) - Number(b.price));
  }

  if (sort === "high-to-low") {
    sortedData.sort((a, b) => Number(b.price) - Number(a.price));
  }

  return (
    <div className="container mx-auto ">
      <h2 className="text-2xl font-bold mb-4 text-center md:text-left mt-10 ">
        All Animals:
      </h2>
      <SortSelect defaultValue={sort} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center pt-5 ">
        {sortedData.map((animal) => (
          <AnimalCard key={animal.id} animal={animal} />
        ))}
      </div>
    </div>
  );
};

export default AllAnimalPage;
