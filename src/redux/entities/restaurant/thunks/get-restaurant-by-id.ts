/* import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL } from "src/constants/constants";
import { selectRestaurantById } from "../selectors";
import { RootState } from "src/redux";

export const getRestaurantById = createAsyncThunk(
  "restaurant/getRestaurantById",
  async (restaurantId: string, { rejectWithValue }) => {
    const response = await fetch(`${API_URL}/restaurant/${restaurantId}`);
    const result = await response.json();
    if (!result?.length) {
      rejectWithValue("No restaurant with such id");
    }
    return result;
  },
  {
    condition: (restaurantId: string, { getState }) => {
      const condition = !!selectRestaurantById(
        getState() as RootState,
        restaurantId
      );
      return condition;
    },
  }
);
 */
