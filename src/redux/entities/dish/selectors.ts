import { RootState } from "src/redux";
import { selectRestaurantById } from "../restaurant/selectors";

export const selectDishModule = (state: RootState) => state.dish;

export const selectDishIds = (state: RootState) => selectDishModule(state).ids;

export const selectDishIdsByRestaurantId = (state: RootState, id: string) =>
  selectRestaurantById(state, id).menu;

export const selectDishById = (state: RootState, id: string) =>
  selectDishModule(state).entities[id];
