"use client";
import { useRouter } from "next/navigation";

const SortSelect = ({ defaultValue }) => {
  const router = useRouter();
  return (
    <select
      defaultValue={defaultValue || ""}
      className="select select-success w-48 pt-2"
      onChange={(e) => {
        const value = e.target.value;
        router.push(`/animals?sort=${value}`);
      }}
    >
      <option value="" disabled>
        Sort By Price
      </option>
      <option value="low-to-high">Price: low to high</option>
      <option value="high-to-low">Price: high to low</option>
    </select>
  );
};

export default SortSelect;
