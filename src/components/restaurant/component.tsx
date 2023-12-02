import { Menu } from "src/components/menu/component";
import { Reviews } from "src/components/reviews/component";
import classes from "./styles.module.scss";
import { RestaurantEntity } from "src/types";
import { ReviewForm } from "../review-form/component";
import classNames from "classnames";

interface Props {
  restaurant: RestaurantEntity;
  className?: string;
}

export const Restaurant: React.FC<Props> = ({ restaurant, className }) => {
  return (
    <section className={classNames(classes.restaurant, className)}>
      <h2>{restaurant.name}</h2>
      <Menu dishes={restaurant.menu} />
      <Reviews reviews={restaurant.reviews} />
      <ReviewForm restaurantId={restaurant.id} />
    </section>
  );
};
