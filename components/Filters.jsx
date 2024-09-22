import { useContext } from "react";
import { ProductContext } from "@/context/ProductContext";

const categories = [
  "Breakfasts",
  "Snacks",
  "Dinner",
  "Beverages",
  "Desserts",
  "Condiments",
  "Appetizers",
  "Nuts",
  "Seeds",
  "Oil",
];

export default function Filters() {
  const { triggerCategorySearch, sortProducts } = useContext(ProductContext);

  const handleCategoryChange = (event) => {
    triggerCategorySearch(event.target.value);
  };

  const handleSortChange = (event) => {
    sortProducts(event.target.value);
  };

  return (
    <div className="flex items-center justify-center p-4 space-x-4 mob:text-sm">
      <div className="flex items-center justify-center gap-2">
        <p>Filter:</p>
        <select
          onChange={handleCategoryChange}
          className="w-full px-2 py-2 text-sm transition-all duration-200 bg-white border rounded-md shadow-sm outline-none pe-3 focus:outline-gray-400 mob:pe-0"
        >
          <option value="">Select Category</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="flex items-center justify-center gap-2">
        <p>or sort:</p>
        <select
          onChange={handleSortChange}
          className="px-2 py-2 text-sm transition-all duration-200 bg-white border rounded-md shadow-sm outline-none pe-3 focus:outline-gray-400 mob:pe-0"
        >
          <option value="">Sort</option>
          <option value="asc">A to Z</option>
          <option value="desc">Z to A</option>
        </select>
      </div>
    </div>
  );
}
