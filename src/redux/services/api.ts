import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "src/constants/constants";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    //builder.query<RestaurantEntity[], unknown>
    getRestaurants: builder.query({
      query: () => ({ url: "restaurants" }),
    }),
    getUsers: builder.query({
      query: () => ({ url: "users" }),
    }),
    getDishesByRestaurantId: builder.query({
      query: (restaurantId) => ({ url: `dishes?restaurantId=${restaurantId}` }),
    }),
    getReviewsByRestaurantId: builder.query({
      query: (restaurantId) => ({
        url: `/reviews?restaurantId=${restaurantId}`,
      }),
    }),
    createReview: builder.mutation({
      query: ({ restaurantId, newReview }) => ({
        url: `review/${restaurantId}`,
        method: "POST",
        body: newReview,
      }),
      invalidatesTags: (_result, _, { restaurantId }) => [
        { type: "Review", id: restaurantId },
      ],
    }),
  }),
});

export const {
  useGetRestaurantsQuery,
  useGetUsersQuery,
  useGetDishesByRestaurantIdQuery,
  useGetReviewsByRestaurantIdQuery,
  useCreateReviewMutation,
} = api;
