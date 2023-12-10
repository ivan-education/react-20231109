import { RootState } from "../..";
import { selectRestaurantById } from "../restaurant/selectors";

export const selectReviewModule = (state: RootState) => state.review;

export const selectReviewIds = (state: RootState) =>
  selectReviewModule(state).ids;

export const selectReviewById = (state: RootState, id: string) =>
  selectReviewModule(state).entities[id];

export const selectReviewsIdsByRestaurantId = (state: RootState, id: string) =>
  selectRestaurantById(state, id).reviews;
