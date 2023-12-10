import { RequestStatus } from "src/types";
import { RootState } from ".";

export const isDataLoading = (state: RootState) =>
  state.dish.status === RequestStatus.PENDING ||
  state.restaurant.status === RequestStatus.PENDING ||
  state.review.status === RequestStatus.PENDING ||
  state.user.status === RequestStatus.PENDING;
