import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectDishIdsByRestaurantId, selectDishById } from "../selectors";
import { RootState } from "src/redux";

export const getDishesByRestaurantId = createAsyncThunk(
  "dish/getDishesByRestaurantId",
  async (restaurantId: string, { rejectWithValue }) => {
    const response = await fetch(
      `http://localhost:3001/api/dishes?restaurantId=${restaurantId}`
    );
    const result = await response.json();
    if (!result?.length) {
      rejectWithValue("No dishes");
    }
    return result;
  },
  {
    //if true, then new request is made
    condition: (restaurantId: string, { getState }) => {
      const dishIds = selectDishIdsByRestaurantId(
        getState() as RootState,
        restaurantId
      );
      const condition = !dishIds.every((id) =>
        selectDishById(getState() as RootState, id)
      );

      return condition;
    },
  }
);
