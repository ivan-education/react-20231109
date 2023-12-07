import { createSlice } from "@reduxjs/toolkit";
import { normalizedReviews } from "src/constants/normalized-mock";
import { ReviewEntity } from "src/types";

interface ReviewAccType {
  [key: string]: ReviewEntity;
}

export const reviewSlice = createSlice({
  name: "review",
  initialState: {
    entities: normalizedReviews.reduce(
      (acc: ReviewAccType, review: ReviewEntity) => {
        acc[review.id] = review;
        return acc;
      },
      {} as ReviewAccType
    ),
    ids: normalizedReviews.map(({ id }) => id),
  },
  reducers: {},
});
