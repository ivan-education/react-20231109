import { createSlice } from "@reduxjs/toolkit";
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

export const restaurantSlice = createSlice({
  name: "restaurant",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRestaurants.pending, (state) => {
        state.status = RequestStatus.PENDING;
      })
      .addCase(getRestaurants.fulfilled, (state, { payload }) => {
        state.entities = payload.reduce(
          (acc: RestaurantAccType, restaurant: RestaurantEntity) => {
            acc[restaurant.id] = restaurant;
            return acc;
          },
          {} as RestaurantAccType
        );

        state.ids = (payload as RestaurantEntity[]).map(({ id }) => id);
        state.status = RequestStatus.FULFILLED;
      })
      .addCase(getRestaurants.rejected, (state) => {
        state.status = RequestStatus.REJECTED;
      });
  },
});
