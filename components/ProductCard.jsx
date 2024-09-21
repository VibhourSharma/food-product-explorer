"use client";

import { useContext } from "react";
import { ProductContext } from "@/context/ProductContext";
import ProductCardSkeleton from "./ProductCardSkeleton";
import defaultImg from "@/public/assets/default-image.svg";

export default function ProductCard() {
  const { products, loading } = useContext(ProductContext);

  if (loading) return <ProductCardSkeleton />;

  const truncateText = (text, wordLimit) => {
    const words = text.split(" ");
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(" ") + " ...read more"
      : text;
  };

  return (
    <div className="flex flex-wrap items-center justify-center gap-8 p-4">
      {products.map((product) => (
        <div
          key={product.id}
          className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-80 h-[500px]"
        >
          <div className="relative h-56 mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl">
            <img
              src={product?.image_url || defaultImg.src} // Use .src to get the image path
              alt={product.product_name || "Default Image"} // Provide a default alt text
              className="object-cover w-full h-full"
            />
          </div>
          <div className="flex-grow p-6">
            <div className="flex items-center justify-between mb-2">
              <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                {product.product_name || "Product Name"}
              </p>
              <p className="block font-sans text-sm antialiased font-medium leading-relaxed text-blue-gray-900">
                Nutrition Grade: {product?.nutrition_grades || "N/A"}
              </p>
            </div>
            <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
              Ingredients:{" "}
              {truncateText(
                product.ingredients_text?.toLowerCase() ||
                  "No Ingredients Available",
                20
              )}
            </p>
          </div>
          <div className="p-6 pt-0">
            <button
              className="align-middle bg-slate-100 select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
              type="button"
            >
              More Information
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
