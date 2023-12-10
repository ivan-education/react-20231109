import { Menu } from "src/components/menu/component";
import { Reviews } from "src/components/reviews/component";
import classes from "./styles.module.scss";
import { ReviewForm } from "../review-form/component";
import classNames from "classnames";
import { useAppDispatch, useAppSelector } from "src/redux/hooks";
import { selectRestaurantById } from "src/redux/entities/restaurant/selectors";
import { useEffect } from "react";
import { getUsers } from "src/redux/entities/user/thunks/get-users";

interface Props {
  id: string;
  className?: string;
}

export const Restaurant: React.FC<Props> = ({ id, className }) => {
  const restaurant = useAppSelector((state) => selectRestaurantById(state, id));

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, [id]);

  if (!restaurant) {
    return null;
  }

  return (
    <section className={classNames(classes.restaurant, className)}>
      <h2 className={classes.restaurant__name}>{restaurant.name}</h2>
      <Menu restaurantId={id} />
      <Reviews restaurantId={id} />
      <ReviewForm restaurantId={id} />
    </section>
  );
};
