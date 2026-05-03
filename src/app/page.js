import Hero from "@/components/Banner";
import FeaturedAnimals from "@/components/FeaturedAnimals";
import TipsAndTopBreads from "@/components/TipsAndTopBreads";
import { Spinner } from "@heroui/react";
import { Suspense } from "react";

export default function Home() {
  return (
    <div>
      <Hero />
      <Suspense
        fallback={
          <div className="min-h-[80vh] flex flex-col justify-center items-center gap-2">
            <Spinner size="xl" />
          </div>
        }
      >
        <FeaturedAnimals />
      </Suspense>
      <TipsAndTopBreads />
    </div>
  );
}
