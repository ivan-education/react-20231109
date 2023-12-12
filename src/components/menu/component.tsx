import { useEffect } from "react";
import { Dish } from "../dish/component";
import classes from "./styles.module.scss";
import { useAppDispatch, useAppSelector } from "src/redux/hooks";
import { getDishesByRestaurantId } from "src/redux/entities/dish/thunks/get-dishes-by-restaurant-id";
import { selectDishIdsByRestaurantId } from "src/redux/entities/dish/selectors";

interface Props {
  restaurantId: string;
}

export const Menu: React.FC<Props> = ({ restaurantId }) => {
  const dishIds = useAppSelector((state) =>
    selectDishIdsByRestaurantId(state, restaurantId)
  );

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getDishesByRestaurantId(restaurantId));
  }, [restaurantId]);

  return (
    <>
      <h3>Menu:</h3>
      <ul className={classes.dishes}>
        {dishIds.map((dishId) => {
          return (
            <li key={dishId} className={classes.dishes__container}>
              <Dish id={dishId} />
            </li>
          );
        })}
      </ul>
    </>
  );
};
