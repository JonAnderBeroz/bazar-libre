import api from "@/api";
import {formatRating} from "@/functions";
import ImageGallery from "./image-gallery";
import SearchBar from "@/components/search-form";
import SearchContainer from "@/components/search-container";

export default async function ProductPage({params: {id}}: {params: {id: number}}) {
  const {title, brand, description, images, price, stock, rating} = await api.products.getById(id);
  return (
    <SearchContainer>
      <section className="flex flex-col gap-2 px-5 w-full">
        <ImageGallery images={images} />
        <h2 className="text-xl font-semibold text-center">{`${title} - ${brand}`}</h2>
        <article className="flex gap-3 justify-center items-center">
          <strong className="flex flex-col text-center">
            <span className="text-lg">
              {price.toLocaleString("es-ES", {currency: "EUR", style: "currency"})}{" "}
            </span>
            <span className="text-xs">{`${stock} disponibles`}</span>
          </strong>
          <span className="text-yellow-300">{formatRating(rating)}</span>
        </article>
        <p>{description}</p>
      </section>
    </SearchContainer>
  );
}
