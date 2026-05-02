import BookingFrom from "@/components/BookingFrom";
import Image from "next/image";
import Link from "next/link";
import { RiHome4Line } from "react-icons/ri";

const AnimalDetailsPage = async ({ params }) => {
  const { id } = await params;
  const res = await fetch("https://qurbani-hat-saz.vercel.app/data.json");
  const animals = await res.json();
  const animal = animals.find((animal) => animal.id == id);

  return (
    <div className="my-10 max-w-5xl mx-auto">
      <div className="bg-base-100 grid grid-cols-1 md:grid-cols-2 gap-5  items-center  shadow-lg  rounded-xl border border-green-200 p-5 ">
        <figure>
          <Image
            src={animal.image}
            height={600}
            width={600}
            alt={animal.name}
            className="w-full rounded-xl  "
            priority
          />
        </figure>
        <div className="lg:space-y-2 border-l border-green-300  pl-5 ">
          <h2 className="card-title">{animal.name}</h2>
          <p>
            <span className="font-medium">Type:</span> {animal.type}{" "}
          </p>
          <p>
            <span className="font-medium">Breed:</span> {animal.breed}{" "}
          </p>
          <p>
            <span className="font-medium">Weight:</span> {animal.weight}{" "}
          </p>
          <p>
            <span className="font-medium">Age:</span> {animal.age}{" "}
          </p>
          <p>
            <span className="font-medium">Location:</span>{" "}
            {animal.location}{" "}
          </p>
          <p>
            <span className="font-medium">Category:</span>{" "}
            {animal.category}{" "}
          </p>

          <p className="opacity-90">{animal.description}</p>
          <p>
            Price:{" "}
            <span className="font-medium text-green-700">
              {animal.price} Tk
            </span>
          </p>
          <div className="flex justify-end items-center">
            <Link href={"/"}>
              <button className=" bg-green-600 py-2 px-4 rounded-lg hover:bg-green-700 text-white font-semibold btn flex items-center">
                <RiHome4Line />
                Back To Home
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Booking Form  */}
      <BookingFrom />
    </div>
  );
};

export default AnimalDetailsPage;
