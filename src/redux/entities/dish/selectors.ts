import { RootState } from "src/redux";
import { selectRestaurantById } from "../restaurant/selectors";

export const selectDishModule = (state: RootState) => state.dish;

export const selectDishIds = (state: RootState) => selectDishModule(state).ids;

export const selectDishIdsByRestaurantId = (state: RootState, id: string) => {
  const restaurant = selectRestaurantById(state, id);
  return restaurant.menu;
};

export const selectDishById = (state: RootState, id: string) =>
  selectDishModule(state).entities[id];
