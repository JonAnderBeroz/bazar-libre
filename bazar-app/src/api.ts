import {Product} from "./types";

const api = {
  products: {
    getByCategory: (query: string): Promise<Product[]> => {
      const url = new URL(`${process.env.API_ENDPOINT}/api/items`);
      const params = new URLSearchParams();
      params.set("q", query);
      console.log(`${url}?${params}`);
      return fetch(`${url}?${params}`).then((res) => res.json());
    },
    getById: (id: number): Promise<Product> => {
      return fetch(`${process.env.API_ENDPOINT}/api/items/${id}`).then((res) => {
        console.log(res);
        return res.json();
      });
    },
  },
};

export default api;
