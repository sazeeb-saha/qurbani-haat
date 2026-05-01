import Image from "next/image";

const AnimalCard = ({ animal }) => {
  return (
    <div className="card bg-base-100 w-96 md:w-full shadow-lg  rounded-xl mb-10 ">
      <figure>
        <Image
          src={animal.image}
          height={200}
          width={200}
          alt={animal.name}
          className="w-full rounded-xl "
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
          <button className=" bg-green-600 py-2 px-4 rounded-lg hover:bg-green-700 text-white font-semibold btn">
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnimalCard;
