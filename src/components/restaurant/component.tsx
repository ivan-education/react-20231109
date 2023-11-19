import { Menu } from "src/components/menu/component";
import { Reviews } from "src/components/reviews/component";
import styles from "./styles.module.css";
import { RestaurantEntity } from "src/types";

interface Props {
  restaurant: RestaurantEntity;
}

export const Restaurant: React.FC<Props> = ({ restaurant }) => {
  return (
    <li className={styles.restaurant}>
      <b>Restaurant Name: </b>
      <span>{restaurant.name}</span>
      <Menu dishes={restaurant.menu} />
      <Reviews reviews={restaurant.reviews} />
    </li>
  );
};
