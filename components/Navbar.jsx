"use client";

import { useState, useContext } from "react";
import Image from "next/image";
import logo from "@/public/assets/logo.svg";
import { ProductContext } from "@/context/ProductContext";

export default function Navbar() {
  const { triggerSearch } = useContext(ProductContext);
  const [searchText, setSearchText] = useState("");

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearchButtonClick = () => {
    triggerSearch(searchText);
  };

  return (
    <div className="flex items-center justify-around text-xl text-white bg-[#F2E9E4] rounded-b-lg backdrop-blur-lg sm:p-2">
      <Image src={logo} alt="Logo" width={200} height={200} className="p-3" />

      <div className="relative z-50">
        <label htmlFor="Search" className="sr-only">
          Search
        </label>

        <input
          type="text"
          id="Search"
          value={searchText}
          onChange={handleInputChange}
          placeholder="Search product..."
          className="w-full px-4 py-2 text-sm text-black transition-all duration-200 bg-white rounded-md shadow-sm outline-none pe-10 backdrop-blur-lg focus:outline-[#ffcfb5]"
        />

        <span
          onClick={handleSearchButtonClick}
          className="absolute inset-y-0 grid w-10 cursor-pointer end-0 place-content-center"
        >
          <button type="button" className="text-gray-200 hover:text-gray-300">
            <span className="sr-only">Search</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
        </span>
      </div>
    </div>
  );
}
