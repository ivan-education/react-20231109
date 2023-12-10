import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL } from "src/constants/constants";
import { RootState } from "src/redux";
import { selectReviewIds, selectReviewsIdsByRestaurantId } from "../selectors";

export const getReviewsByRestaurantId = createAsyncThunk(
  "review/getReviewsByRestaurantId",
  async (restaurantId: string, thunkApi) => {
    const response = await fetch(
      `${API_URL}/reviews?restaurantId=${restaurantId}`
    );
    const result = await response.json();

    if (!result?.length) {
      return thunkApi.rejectWithValue("No reviews");
    }

    return result;
  },
  {
    condition: (restaurantId: string, { getState }) => {
      const reviewIds = selectReviewsIdsByRestaurantId(
        getState() as RootState,
        restaurantId
      );

      const condition = !reviewIds.every((id) =>
        selectReviewIds(getState() as RootState).includes(id)
      );

      return condition;
    },
  }
);
