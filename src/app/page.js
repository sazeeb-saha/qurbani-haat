import Hero from "@/components/Banner";
import FeaturedAnimals from "@/components/FeaturedAnimals";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <FeaturedAnimals />
    </div>
  );
}
