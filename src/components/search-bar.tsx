"use client";

import {useRouter} from "next/navigation";
import {FormEvent} from "react";

export default function SearchBar() {
  const router = useRouter();
  function handleFormSubmit(e: FormEvent) {
    e.preventDefault();
    const {value}: HTMLInputElement = e.target[0];
    if (!value) {
      alert("Debes rellenar el campo!");
      return;
    }
    router.push(`/items?search=${value}`);
  }

  return (
    <form
      onSubmit={handleFormSubmit}
      className="flex  items-center bg-[#ebebeb] w-fit px-2 py-1 rounded-sm"
    >
      <input
        name="product"
        type="text"
        className="bg-[#ebebeb] text-black outline-none"
        placeholder="laptops, smartphones, ..."
      />
      <button type="submit">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-search"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="#c4c4c4"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
          <path d="M21 21l-6 -6"></path>
        </svg>
      </button>
    </form>
  );
}
