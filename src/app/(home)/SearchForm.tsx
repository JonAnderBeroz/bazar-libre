"use client";

import {FormEvent} from "react";
import {useRouter} from "next/navigation";

export default function SearchForm() {
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
    <form onSubmit={handleFormSubmit} className="flex flex-col gap-4 items-center">
      <input
        name="product"
        type="text"
        className="bg-[#ebebeb] text-black py-1 px-2"
        placeholder="laptops, smartphones, ..."
      />
      <button type="submit" className="rounded-full bg-gray-400 w-32 text-black">
        Buscar
      </button>
    </form>
  );
}
