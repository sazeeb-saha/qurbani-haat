import Image from "next/image";
import Link from "next/link";

const AnimalCard = ({ animal }) => {
  return (
    <div className="card bg-base-100 w-96 md:w-full shadow-md hover:shadow-2xl transition-all duration-300  rounded-xl mb-10 ">
      <figure>
        <Image
          src={animal.image}
          height={600}
          width={600}
          alt={animal.name}
          className="w-full rounded-t-xl group-hover:scale-110 transition-transform duration-300 "
          priority
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{animal.name}</h2>
        <p>{animal.description}</p>
        <p>
          Price: <span className="font-medium">{animal.price} Tk</span>
        </p>
        <div className="card-actions justify-end items-center">
          <Link href={`/animals/${animal.id}`}>
            <button className=" bg-green-600 py-2 px-4 rounded-lg hover:bg-green-700 text-white font-semibold btn">
              Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AnimalCard;
