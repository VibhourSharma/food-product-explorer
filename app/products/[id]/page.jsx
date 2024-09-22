"use client";

import { useContext, useEffect, useState } from "react";
import { ProductContext } from "@/context/ProductContext";
import { useRouter } from "next/navigation";
import defaultImg from "@/public/assets/default-image.svg";

export default function ProductDetails({ params }) {
  const { products } = useContext(ProductContext);
  const { id } = params;
  const router = useRouter();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const foundProduct = products.find((prod) => prod.id === id);
    setProduct(foundProduct || null);
  }, [id, products]);

  return (
    <div className="flex flex-wrap items-start justify-center p-8">
      {/* Image Section */}
      <div className="w-full p-4 md:w-1/2">
        <img
          src={product?.image_url || defaultImg.src}
          alt={product?.product_name}
          className="w-full h-[400px] object-contain rounded-lg shadow-lg"
          style={{ maxWidth: "100%", height: "400px" }}
        />
      </div>

      {/* Details Section */}
      <div className="flex flex-col w-full p-4 md:w-1/2">
        <h1 className="mb-4 text-2xl font-bold">{product?.product_name}</h1>
        <p className="mb-2 text-gray-600">
          <strong>Ingredients: </strong>
          {product?.ingredients_text || "No ingredients available"}
        </p>
        <p className="mb-2 text-gray-600">
          <strong>Energy: </strong>
          {product?.nutriments.energy || "n/a"} kJ
        </p>
        <p className="mb-2 text-gray-600">
          <strong>Fat: </strong>
          {product?.nutriments.fat || "n/a"} g
        </p>
        <p className="mb-2 text-gray-600">
          <strong>Carbs: </strong>
          {product?.nutriments.carbohydrates || "n/a"} g
        </p>
        <p className="mb-2 text-gray-600">
          <strong>Proteins: </strong>
          {product?.nutriments.proteins || "n/a"} g
        </p>
        <p className="mb-4 text-gray-600">
          <strong>Labels: </strong>
          {product?.labels || "No labels available"}
        </p>

        {/* Go Back Button */}
        <button
          onClick={() => router.back()}
          className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
        >
          Go Back
        </button>
      </div>
    </div>
  );
}
