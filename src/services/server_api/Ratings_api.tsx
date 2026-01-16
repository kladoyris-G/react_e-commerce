import { serverApi } from "./Server_api";
import { CustomerRating } from "@models/customer_rating/Customer_rating";

export const ratingApi = serverApi.injectEndpoints({
  endpoints: (builder) => ({
    getRatings: builder.query<CustomerRating[], void>({
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
          new CustomerRating({
            id: 1,
            rating: 4.5,
            userName: "Sarah M.",
            isUserValid: true,
            comment:
              "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
          }),
          new CustomerRating({
            id: 2,
            rating: 2,
            userName: "Alex K.",
            isUserValid: false,
            comment:
              "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions",
          }),
          new CustomerRating({
            id: 3,
            rating: 3.5,
            userName: "James L.",
            isUserValid: true,
            comment:
              "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
          }),
          new CustomerRating({
            id: 4,
            rating: 5,
            userName: "Marry",
            isUserValid: false,
            comment:
              "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
          }),
          new CustomerRating({
            id: 5,
            rating: 2,
            userName: "Eren",
            isUserValid: true,
            comment:
              "The item itself is decent and does the job, but the color is slightly different in person than it appeared in the website photos. Also, the setup instructions were a bit confusing and took me longer than anticipated to figure out. It’s a solid product for the money, but there is definitely room for improvement in the documentation.",
          }),
          new CustomerRating({
            id: 6,
            rating: 5,
            userName: "Sofia",
            isUserValid: false,
            comment:
              "I was hesitant to order this at first, but I’m so glad I did. The build quality feels premium and it arrived two days earlier than expected. It works exactly as described in the manual, and the packaging was very secure. I’ll definitely be ordering from this shop again. Great value for the price!",
          }),
        ];
      },
      providesTags: ["Rating"],
    }),
  }),
  overrideExisting: false,
});

export const { useGetRatingsQuery } = ratingApi;
