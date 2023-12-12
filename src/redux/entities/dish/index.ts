import { createSlice } from "@reduxjs/toolkit";
import { DishEntity, RequestStatus } from "src/types";
import { getDishesByRestaurantId } from "src/redux/entities/dish/thunks/get-dishes-by-restaurant-id";

interface DishAccType {
  [key: string]: DishEntity;
}

export interface DishState {
  entities: DishAccType;
  ids: string[];
  status: RequestStatus;
}

const initialState: DishState = {
  entities: {} as DishAccType,
  ids: [] as string[],
  status: RequestStatus.IDLE,
};

export const dishSlice = createSlice({
  name: "dish",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getDishesByRestaurantId.pending, (state) => {
        state.status = RequestStatus.PENDING;
      })
      .addCase(getDishesByRestaurantId.fulfilled, (state, { payload }) => {
        state.entities = (payload as DishEntity[]).reduce(
          (acc: DishAccType, dish: DishEntity) => {
            acc[dish.id] = dish;
            return acc;
          },
          state.entities
        );

        const newIds = (payload as DishEntity[]).map(({ id }) => id);
        state.ids = Array.from(new Set(state.ids.concat(newIds)));

        state.status = RequestStatus.FULFILLED;
      })
      .addCase(getDishesByRestaurantId.rejected, (state) => {
        state.status = RequestStatus.REJECTED;
      });
  },
});
