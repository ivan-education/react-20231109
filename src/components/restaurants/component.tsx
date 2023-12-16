import { Restaurant } from "src/components/restaurant/component";
import classes from "./styles.module.scss";
import { RestaurantEntity } from "src/types";

interface Props {
  restaurants: RestaurantEntity[];
}

export const Restaurants: React.FC<Props> = ({ restaurants }) => {
  return (
    <ul className={classes.restaurants}>
      {restaurants.map((restaurant: RestaurantEntity) => {
        return (
          <li key={restaurant.id}>
            <Restaurant restaurant={restaurant} />
          </li>
        );
      })}
    </ul>
  );
};
