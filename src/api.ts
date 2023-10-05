import {Product} from "./types";
import data from "../products.json";

const products: Product[] = data.products;

const api = {
  products: {
    getByCategory: (category: string): Product[] => {
      return products.filter((product) =>
        product.category.toLocaleLowerCase().startsWith(category),
      );
    },
    getById: (id: number): Product => {
      const a = products.find((product) => product.id === +id)!;
      console.log(a);
      return a;
    },
  },
};

export default api;
