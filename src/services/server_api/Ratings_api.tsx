import { serverApi } from "./Server_api";
import { Rating } from "@models/rating/Rating";

export const ratingApi = serverApi.injectEndpoints({
  endpoints: (builder) => ({
    getRatings: builder.query<Rating[], void>({
      query: (body) => ({
        url: "/",
        method: "GET",
        body,
      }),
      transformResponse: (response: {
        success: boolean;
        count: number;
        data: any[];
      }) => {
        response;
        return [
          new Rating({
            rating: 4.5,
            userName: "Sarah M.",
            isUserValid: true,
            comment: "Nice quality",
          }),
          new Rating({
            rating: 2,
            userName: "Alex K.",
            isUserValid: false,
            comment: "Nice quality",
          }),
          new Rating({
            rating: 3.5,
            userName: "James L.",
            isUserValid: true,
            comment: "Nice quality",
          }),
          new Rating({
            rating: 5,
            userName: "Marry",
            isUserValid: false,
            comment: "Nice quality",
          }),
        ];
      },
      providesTags: ["Rating"],
    }),
  }),
});
