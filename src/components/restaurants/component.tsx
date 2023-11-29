import { Restaurant } from "src/components/restaurant/component";
import { RestaurantEntity } from "src/types";
import classes from "./styles.module.scss";

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
