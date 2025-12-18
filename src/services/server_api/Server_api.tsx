import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const serverApi = createApi({
  reducerPath: "serverApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000", // TODO na to balo apo to enivroment
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  tagTypes: ["Product"],
  endpoints: () => ({}),
});
