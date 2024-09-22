"use client";

import { useContext } from "react";
import { ProductContext } from "@/context/ProductContext";
import Filters from "@/components/Filters";
import Pagination from "@/components/Pagination";
import ProductCard from "@/components/ProductCard";
import ProductCardSkeleton from "@/components/ProductCardSkeleton";
import Navbar from "@/components/Navbar";

export default function Home() {
  const { products, loading, handlePageChange, currentPage, totalPages } =
    useContext(ProductContext);

  return (
    <>
      <Navbar />
      <Filters />
      {loading ? <ProductCardSkeleton /> : <ProductCard products={products} />}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        handlePageChange={handlePageChange}
      />
    </>
  );
}
