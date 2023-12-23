import classes from "./styles.module.scss";
import { RestaurantEntity } from "src/types";
import { RestaurantCard } from "../restaurant-card/component";

interface Props {
  restaurants: RestaurantEntity[];
}

export const RestaurantCards: React.FC<Props> = ({ restaurants }) => {
  return (
    <ul className={classes.cards}>
      {restaurants.map((restaurant: RestaurantEntity) => {
        return (
          <li key={restaurant.id}>
            <RestaurantCard restaurant={restaurant} />
          </li>
        );
      })}
    </ul>
  );
};
