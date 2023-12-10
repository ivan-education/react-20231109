import { createSlice } from "@reduxjs/toolkit";
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

export const reviewSlice = createSlice({
  name: "review",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getReviewsByRestaurantId.pending, (state) => {
        state.status = RequestStatus.PENDING;
      })
      .addCase(getReviewsByRestaurantId.fulfilled, (state, { payload }) => {
        const newEntities = (payload as ReviewEntity[]).reduce(
          (acc: ReviewAccType, review: ReviewEntity) => {
            acc[review.id] = review;
            return acc;
          },
          {} as ReviewAccType
        );
        state.entities = { ...state.entities, ...newEntities };

        const newIds = (payload as ReviewEntity[]).map(({ id }) => id);
        state.ids = state.ids.concat(newIds);

        state.status = RequestStatus.FULFILLED;
      })
      .addCase(getReviewsByRestaurantId.rejected, (state) => {
        state.status = RequestStatus.REJECTED;
      });
  },
});
