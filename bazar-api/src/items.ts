import {Hono} from "hono";
import {HTTPException} from "hono/http-exception";

import data from "../products.json";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

const products: Product[] = data.products;
const items = new Hono();

items.get("/:id", (context) => {
  const {id} = context.req.param();
  const product: Product | null = products.find((product) => product.id === +id) ?? null;
  if (product === null) {
    throw new HTTPException(404, {message: "Producto no encontrado!"});
  }
  return context.json(product);
});

items.get("/", (context) => {
  const query = context.req.query("q");
  console.log(query);
  if (!query) {
    throw new HTTPException(404, {message: "Query param no provisto"});
  }
  const queryProducts: Product[] = products.filter((product) =>
    product.category.toLocaleLowerCase().startsWith(query.toLocaleLowerCase()),
  );
  console.log("products", queryProducts);
  return context.json(queryProducts);
});

export default items;
