/* import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectDishById } from "../selectors";
import { RootState } from "src/redux";
import { DishEntity } from "src/types";

export const getDish = createAsyncThunk(
  "dish/getDish",
  async (dishId: string, { rejectWithValue }) => {
    const response = await fetch(`http://localhost:3001/api/dish/${dishId}`);
    const result = await response.json();
    if (!result?.length) {
      rejectWithValue("No dish with such dishId");
    }
    return result;
  },
  {
    condition: (dishId: string, { getState }) => {
      const dish: DishEntity = selectDishById(getState() as RootState, dishId);
      if (dish) {
        return false;
      }
    },
  }
);
 */
