import { createSlice } from "@reduxjs/toolkit";
import { normalizedDishes } from "src/constants/normalized-mock";
import { DishEntity } from "src/types";

interface DishAccType {
  [key: string]: DishEntity;
}

export const dishSlice = createSlice({
  name: "dish",
  initialState: {
    entities: normalizedDishes.reduce((acc: DishAccType, dish: DishEntity) => {
      acc[dish.id] = dish;
      return acc;
    }, {} as DishAccType),
    ids: normalizedDishes.map(({ id }) => id),
  },
  reducers: {},
});
