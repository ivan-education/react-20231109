import { createSlice } from "@reduxjs/toolkit";
import { DishEntity, RequestStatus } from "src/types";
import { getDishesByRestaurantId } from "src/redux/entities/dish/thunks/get-dish-by-restaurant-id";

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
        const newEntities: DishAccType = (payload as DishEntity[]).reduce(
          (acc: DishAccType, dish: DishEntity) => {
            acc[dish.id] = dish;
            return acc;
          },
          {} as DishAccType
        );
        state.entities = { ...state.entities, ...newEntities };

        const newIds = (payload as DishEntity[]).map(({ id }) => id);
        state.ids = state.ids.concat(newIds);

        state.status = RequestStatus.FULFILLED;
      })
      .addCase(getDishesByRestaurantId.rejected, (state) => {
        state.status = RequestStatus.REJECTED;
      });
  },
});
