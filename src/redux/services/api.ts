import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "src/constants/constants";

export const api = createApi({
  reducerPath: "api",
  tagTypes: ["Review"],
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
      // each result, which is reviews array, is marked with a tag
      providesTags: (result, _, restaurantId) =>
        result
          .map(({ id }: { id: string }) => ({ type: "Review", id }))
          // tag for new, non-existing entities
          .concat(
            { type: "Review", id: "ALL" },
            { type: "Review", id: restaurantId }
          ),
    }),
    createReview: builder.mutation({
      query: ({ restaurantId, ...newReview }) => ({
        url: `review/${restaurantId}`,
        method: "POST",
        body: newReview,
      }),
      // invalidate tags to refresh the page
      invalidatesTags: (_result, _, { restaurantId }) => [
        { type: "Review", id: restaurantId },
      ],
    }),
    updateReview: builder.mutation({
      query: ({ reviewId, ...updatedReview }) => ({
        url: `review/${reviewId}`,
        method: "PATCH",
        body: updatedReview,
      }),
      invalidatesTags: (_result, _, { restaurantId }) => [
        { type: "Review", id: restaurantId },
      ],
    }),
    getRestaurantById: builder.query({
      query: (restaurantId) => ({
        url: `restaurant/${restaurantId}`,
      }),
    }),
  }),
});

export const {
  useGetRestaurantsQuery,
  useGetUsersQuery,
  useGetDishesByRestaurantIdQuery,
  useGetReviewsByRestaurantIdQuery,
  useCreateReviewMutation,
  useUpdateReviewMutation,
  useGetRestaurantByIdQuery,
} = api;
