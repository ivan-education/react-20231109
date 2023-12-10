import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL } from "src/constants/constants";
import { RootState } from "src/redux";

export const getRestaurants = createAsyncThunk(
  "restaurant/getRestaurant",
  async (_, { rejectWithValue }) => {
    const response = await fetch(`${API_URL}/restaurants/`);
    const result = await response.json();

    if (!result?.length) {
      rejectWithValue("No restaurants");
    }

    return result;
  },
  {
    condition: (_, { getState }) => {
      return !(getState() as RootState).restaurant.entities.length;
    },
  }
);
