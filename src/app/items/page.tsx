"use client";

import api from "@/api";
import SearchBar from "@/components/search-bar";
import {formatRating} from "@/functions";
import {type Product} from "@/types";

import Image from "next/image";
import Link from "next/link";

function Item({product: {id, title, description, price, rating, thumbnail}}: {product: Product}) {
  return (
    <Link href={`/items/${id}`} className="flex flex-col gap-3 h-80">
      <Image
        src={thumbnail}
        alt={`Image of ${title}`}
        width={150}
        height={150}
        className="aspect-square object-fill rounded-lg self-center"
      />
      <strong>{title}</strong>
      <p className="line-clamp-4 flex-1">{description}</p>
      <div className="flex gap-4 w-full justify-between">
        <strong>{price.toLocaleString("es-ES", {style: "currency", currency: "EUR"})}</strong>
        <span className="text-yellow-300">{formatRating(rating)}</span>
      </div>
    </Link>
  );
}

export default function Items() {
  const category = new URLSearchParams(location.search).get("search")!.toLocaleLowerCase();
  const products = api.products.getByCategory(category);
  return (
    <section className="flex flex-col gap-5 max-w-6xl justify-self-center w-full p-4">
      <header className="self-center">
        <SearchBar />
      </header>
      <ul className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-10 place-items-center">
        {products.map((product) => (
          <li key={product.id}>
            <Item product={product} />
          </li>
        ))}
      </ul>
    </section>
  );
}
