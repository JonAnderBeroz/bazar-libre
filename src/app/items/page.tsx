import SearchBar from "@/components/search-bar";
import {formatRating} from "@/functions";
import {type Product} from "@/types";

import Image from "next/image";
import Link from "next/link";
import api from "@/api";

function Product({
  product: {id, title, description, price, rating, thumbnail},
}: {
  product: Product;
}) {
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

export default async function ProductsIndex({
  searchParams,
}: {
  searchParams?: {[key: string]: string};
}) {
  const category = searchParams?.search!;
  const products = await api.products.getByCategory(category);
  return (
    <section className="flex flex-col gap-5 max-w-6xl items-center p-4">
      <header>
        <SearchBar />
      </header>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Product product={product} />
          </li>
        ))}
      </ul>
    </section>
  );
}
