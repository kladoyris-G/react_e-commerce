import { serverApi } from "./Server_api";
import { Product } from "@models/product/Product";

export const productApi = serverApi.injectEndpoints({
  endpoints: (builder) => ({
    getNewArrivals: builder.query<Product[], void>({
      query: (body) => ({
        url: "/api/products/new-arrivals",
        method: "GET",
        body,
      }),
      transformResponse: (response: {
        success: boolean;
        count: number;
        data: any[];
      }) => {
        console.log("Raw server response:", response);

        return response.data.map((item) => new Product(item)).slice(0, 4);
      },
      providesTags: ["Product"],
    }),

    getTopSelling: builder.query<Product[], void>({
      query: (body) => ({
        url: "/api/products/top-selling",
        method: "GET",
        body,
      }),
      transformResponse: (response: {
        success: boolean;
        count: number;
        data: any[];
      }) => {
        console.log("Raw server response:", response);

        return response.data.map((item) => new Product(item)).slice(0, 4);
      },
      providesTags: ["Product"],
    }),
  }),
  overrideExisting: false,
});

export const { useGetNewArrivalsQuery, useGetTopSellingQuery } = productApi;
