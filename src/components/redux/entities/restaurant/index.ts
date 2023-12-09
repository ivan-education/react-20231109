import { createSlice } from "@reduxjs/toolkit";
import { normalizedRestaurants } from "src/constants/normalized-mock";
import { RestaurantEntity } from "src/types";

interface RestaurantAccType {
  [key: string]: RestaurantEntity;
}

export const restaurantSlice = createSlice({
  name: "restaurant",
  initialState: {
    entities: normalizedRestaurants.reduce(
      (acc: RestaurantAccType, restaurant: RestaurantEntity) => {
        acc[restaurant.id] = restaurant;
        return acc;
      },
      {} as RestaurantAccType
    ),
    ids: normalizedRestaurants.map(({ id }) => id),
  },
  reducers: {},
});
