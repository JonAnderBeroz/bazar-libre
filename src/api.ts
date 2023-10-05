import {Product} from "./types";

const api = {
  products: {
    getByCategory: (query: string): Promise<Product[]> => {
      const url = new URL(`${process.env.API_ENDPOINT}/items`);
      const params = new URLSearchParams();
      params.set("q", query);
      return fetch(`${url}?${params}`).then((res) => res.json());
    },
    getById: (id: number): Promise<Product> => {
      return fetch(`${process.env.API_ENDPOINT}/items/${id}`).then((res) => res.json());
    },
  },
};

export default api;
