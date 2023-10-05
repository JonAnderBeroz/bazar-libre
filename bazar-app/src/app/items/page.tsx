import Image from "next/image";
import Link from "next/link";

import {formatRating} from "@/functions";
import {type Product} from "@/types";
import api from "@/api";
import SearchContainer from "@/components/search-container";

function Product({
  product: {id, title, description, price, rating, thumbnail},
}: {
  product: Product;
}) {
  return (
    <Link href={`/items/${id}`} className="flex flex-col gap-3 h-full">
      <Image
        src={thumbnail}
        alt={`Image of ${title}`}
        width={150}
        height={150}
        className="aspect-square object-fill rounded-lg self-center"
      />
      <strong className="self-center">{title}</strong>
      <p className="flex-1">{description}</p>
      <div className="flex gap-4 justify-between">
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
    <SearchContainer>
      <ul className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-10 w-full">
        {products.map((product) => (
          <li key={product.id}>
            <Product product={product} />
          </li>
        ))}
      </ul>
    </SearchContainer>
  );
}
