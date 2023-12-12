import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { RequestStatus, ReviewEntity } from "src/types";
import { getReviewsByRestaurantId } from "./thunks/get-reviews-by-restaurant-id";

interface ReviewAccType {
  [key: string]: ReviewEntity;
}

interface ReviewState {
  entities: ReviewAccType;
  ids: string[];
  status: RequestStatus;
}

const initialState: ReviewState = {
  entities: {} as ReviewAccType,
  ids: [] as string[],
  status: RequestStatus.IDLE,
};

const reviewAdapter = createEntityAdapter<ReviewEntity>();

export const reviewSlice = createSlice({
  name: "review",
  initialState: reviewAdapter.getInitialState(initialState),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getReviewsByRestaurantId.pending, (state) => {
        state.status = RequestStatus.PENDING;
      })
      .addCase(getReviewsByRestaurantId.fulfilled, (state, { payload }) => {
        reviewAdapter.upsertMany(state, payload);
        state.status = RequestStatus.FULFILLED;
      })
      .addCase(getReviewsByRestaurantId.rejected, (state) => {
        state.status = RequestStatus.REJECTED;
      });
  },
});
