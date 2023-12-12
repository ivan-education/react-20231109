import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
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

const dishAdapter = createEntityAdapter<DishEntity>();

export const dishSlice = createSlice({
  name: "dish",
  initialState: dishAdapter.getInitialState(initialState),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getDishesByRestaurantId.pending, (state) => {
        state.status = RequestStatus.PENDING;
      })
      .addCase(getDishesByRestaurantId.fulfilled, (state, { payload }) => {
        // inserts or updates all DishEntities to the state in both `entities` object and `ids` array automatically
        dishAdapter.upsertMany(state, payload);
        state.status = RequestStatus.FULFILLED;
      })
      .addCase(getDishesByRestaurantId.rejected, (state) => {
        state.status = RequestStatus.REJECTED;
      });
  },
});
