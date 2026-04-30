import Image from "next/image";

const AnimalCard = ({ animal }) => {
  return (
    <div className="card bg-base-100 w-96 md:w-full shadow-sm ">
      <figure>
        <Image
          src={animal.image}
          height={200}
          width={200}
          alt={animal.name}
          className="w-full rounded-xl "
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          Card Title
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
      </div>
    </div>
  );
};

export default AnimalCard;
