import { Menu } from "src/components/menu/component";
import { Reviews } from "src/components/reviews/component";
import classes from "./styles.module.scss";
import { ReviewForm } from "../review-form/component";
import classNames from "classnames";
import { RestaurantEntity } from "src/types";

interface Props {
  restaurant: RestaurantEntity;
  className?: string;
}

export const Restaurant: React.FC<Props> = ({ restaurant, className }) => {
  if (!restaurant) {
    return null;
  }

  const id = restaurant.id;

  return (
    <section className={classNames(classes.restaurant, className)}>
      <h2 className={classes.restaurant__name}>{restaurant.name}</h2>
      <Menu restaurantId={id} />
      <Reviews restaurantId={id} />
      <ReviewForm restaurantId={id} />
    </section>
  );
};
