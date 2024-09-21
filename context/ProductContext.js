"use client";

import { createContext, useState, useEffect } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchInitialData = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://world.openfoodfacts.org/products.json"
      );
      const data = await response.json();
      setProducts(data.products || []);
    } catch (error) {
      console.error("Error fetching initial data:", error);
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  const triggerSearch = async (query) => {
    setLoading(true);
    try {
      const url = `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${query}&search_simple=1&json=1`;
      const response = await fetch(url);
      const data = await response.json();
      setProducts(data.products || []);
    } catch (error) {
      console.error("Error during search:", error);
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInitialData();
  }, []);

  return (
    <ProductContext.Provider
      value={{
        products,
        loading,
        fetchInitialData,
        triggerSearch,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
