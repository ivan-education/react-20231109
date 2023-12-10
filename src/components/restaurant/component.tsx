import { Menu } from "src/components/menu/component";
import { Reviews } from "src/components/reviews/component";
import classes from "./styles.module.scss";
import { ReviewForm } from "../review-form/component";
import classNames from "classnames";
import { useAppDispatch, useAppSelector } from "src/redux/hooks";
import { selectRestaurantById } from "src/redux/entities/restaurant/selectors";
import { selectDishIdsByRestaurantId } from "src/redux/entities/dish/selectors";
import { useEffect } from "react";
import { getDishesByRestaurantId } from "src/redux/entities/dish/thunks/get-dishes-by-restaurant-id";
import { getUsers } from "src/redux/entities/user/thunks/get-users";
import { getReviewsByRestaurantId } from "src/redux/entities/review/thunks/get-reviews-by-restaurant-id";
import { selectReviewsIdsByRestaurantId } from "src/redux/entities/review/selectors";

interface Props {
  id: string;
  className?: string;
}

export const Restaurant: React.FC<Props> = ({ id, className }) => {
  const restaurant = useAppSelector((state) => selectRestaurantById(state, id));

  const dishIds = useAppSelector((state) =>
    selectDishIdsByRestaurantId(state, id)
  );
  const reviewIds = useAppSelector((state) =>
    selectReviewsIdsByRestaurantId(state, id)
  );

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getDishesByRestaurantId(id));
    dispatch(getReviewsByRestaurantId(id));
    dispatch(getUsers());
  }, [id]);

  if (!restaurant) {
    return null;
  }

  return (
    <section className={classNames(classes.restaurant, className)}>
      <h2 className={classes.restaurant__name}>{restaurant.name}</h2>
      <Menu dishIds={dishIds} />
      <Reviews reviewIds={reviewIds} />
      <ReviewForm restaurantId={restaurant.id} />
    </section>
  );
};
