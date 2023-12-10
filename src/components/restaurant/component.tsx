import { Menu } from "src/components/menu/component";
import { Reviews } from "src/components/reviews/component";
import classes from "./styles.module.scss";
import { ReviewForm } from "../review-form/component";
import classNames from "classnames";
import { useAppDispatch, useAppSelector } from "src/redux/hooks";
import { selectRestaurantById } from "src/redux/entities/restaurant/selectors";
import { selectDishIdsByRestaurantId } from "src/redux/entities/dish/selectors";
import { useEffect } from "react";
import { getDishesByRestaurantId } from "src/redux/entities/dish/thunks/get-dish-by-restaurant-id";

interface Props {
  id: string;
  className?: string;
}

export const Restaurant: React.FC<Props> = ({ id, className }) => {
  const restaurant = useAppSelector((state) => selectRestaurantById(state, id));

  const dishIds = useAppSelector((state) =>
    selectDishIdsByRestaurantId(state, id)
  );

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getDishesByRestaurantId(id));
  }, [id]);

  if (!restaurant) {
    return null;
  }

  return (
    <section className={classNames(classes.restaurant, className)}>
      <h2 className={classes.restaurant__name}>{restaurant.name}</h2>
      <Menu dishIds={dishIds} />
      <Reviews reviewIds={restaurant.reviews} />
      <ReviewForm restaurantId={restaurant.id} />
    </section>
  );
};
