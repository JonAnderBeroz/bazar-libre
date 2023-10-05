"use client";

import Search from "@/icons/search";
import {useRouter} from "next/navigation";
import {FormEvent} from "react";

export default function SearchBar({showButton = false}: {showButton?: boolean}) {
  const router = useRouter();
  function handleFormSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form: HTMLFormElement = e.target as HTMLFormElement;
    const {value} = form.elements.namedItem("product") as HTMLInputElement;
    if (!value) {
      alert("Debes rellenar el campo!");
      return;
    }
    router.push(`/items?search=${value}`);
  }

  return (
    <form onSubmit={handleFormSubmit} className="flex flex-col gap-4 items-center">
      <article className="bg-[#ebebeb] text-black py-1 flex">
        <input
          name="product"
          type="text"
          className="bg-[#ebebeb] text-black outline-none pl-2"
          placeholder="laptops, smartphones, ..."
        />
        <button type="submit" className="pr-2">
          <Search />
        </button>
      </article>
      {showButton && (
        <button type="submit" className="rounded-full bg-gray-400 w-32 text-black">
          Buscar
        </button>
      )}
    </form>
  );
}
