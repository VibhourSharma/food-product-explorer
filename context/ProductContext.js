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

  const triggerSearch = async (query, isBarcode = false) => {
    setLoading(true);
    try {
      let url;
      if (isBarcode) {
        url = `https://world.openfoodfacts.org/api/v0/product/${query}.json`;
      } else {
        url = `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${query}&search_simple=1&json=1`;
      }

      const response = await fetch(url);
      const data = await response.json();
      if (isBarcode) {
        setProducts(data.product ? [data.product] : []);
      } else {
        setProducts(data.products || []);
      }
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

  const triggerCategorySearch = async (category) => {
    setLoading(true);
    try {
      if (!category) {
        fetchInitialData();
      }
      const url = `https://world.openfoodfacts.org/category/${category}.json`;
      const response = await fetch(url);
      const data = await response.json();
      setProducts(data.products || []);
    } catch (error) {
      console.error("Error during category search:", error);
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  const sortProducts = (order) => {
    const sortedProducts = [...products].sort((a, b) => {
      if (order === "asc") {
        return a.product_name.localeCompare(b.product_name);
      } else if (order === "desc") {
        return b.product_name.localeCompare(a.product_name);
      }
      return products;
    });
    setProducts(sortedProducts);
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        loading,
        fetchInitialData,
        triggerSearch,
        triggerCategorySearch,
        sortProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
