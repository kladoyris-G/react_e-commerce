import { serverApi } from "./Server_api";
import { CustomerRating } from "@models/customer_rating/Customer_rating";

export const ratingApi = serverApi.injectEndpoints({
  endpoints: (builder) => ({
    getRatings: builder.query<CustomerRating[], void>({
      query: (body) => ({
        url: "/api/reviews",
        method: "GET",
        body,
      }),
      transformResponse: (response: {
        success: boolean;
        count: number;
        data: any[];
      }) => {
        console.log("Raw server response:", response);

        return response.data.map((item) => CustomerRating.fromApi(item));
      },
      providesTags: ["Rating"],
    }),
  }),
  overrideExisting: false,
});

export const { useGetRatingsQuery } = ratingApi;
