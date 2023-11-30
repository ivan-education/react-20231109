import { Menu } from "src/components/menu/component";
import { Reviews } from "src/components/reviews/component";
import styles from "./styles.module.css";
import { RestaurantEntity } from "src/types";
import { ReviewForm } from "../review-form/component";

interface Props {
  restaurant: RestaurantEntity;
}

export const Restaurant: React.FC<Props> = ({ restaurant }) => {
  if (!restaurant) {
    return null;
  }

  return (
    <div className={styles.restaurant}>
      <b>Restaurant Name: </b>
      <span>{restaurant.name}</span>
      <Menu dishes={restaurant.menu} />
      <Reviews reviews={restaurant.reviews} />
      <ReviewForm restaurantId={restaurant.id} />
    </div>
  );
};
