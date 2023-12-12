import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { RequestStatus, RestaurantEntity } from "src/types";
import { getRestaurants } from "./thunks/get-restaurants";

interface RestaurantAccType {
  [key: string]: RestaurantEntity;
}

interface RestaurantState {
  entities: RestaurantAccType;
  ids: string[];
  status: RequestStatus;
}

const initialState: RestaurantState = {
  entities: {} as RestaurantAccType,
  ids: [] as string[],
  status: RequestStatus.IDLE,
};

const restaurantAdapter = createEntityAdapter<RestaurantEntity>();

export const restaurantSlice = createSlice({
  name: "restaurant",
  initialState: restaurantAdapter.getInitialState(initialState),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRestaurants.pending, (state) => {
        state.status = RequestStatus.PENDING;
      })
      .addCase(getRestaurants.fulfilled, (state, { payload }) => {
        restaurantAdapter.upsertMany(state, payload);
        state.status = RequestStatus.FULFILLED;
      })
      .addCase(getRestaurants.rejected, (state) => {
        state.status = RequestStatus.REJECTED;
      });
  },
});
