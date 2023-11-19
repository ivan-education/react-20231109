import { Restaurant } from "src/components/restaurant/component";
import restaurantPageStyles from "src/pages/restaurants-page/styles.module.css";
import { RestaurantEntity } from "src/types";
import styles from "./styles.module.css";

interface Props {
  restaurants: RestaurantEntity[];
}

export const Restaurants: React.FC<Props> = ({ restaurants }) => {
  return (
    <section className={`${styles.restaurants} ${restaurantPageStyles.indent}`}>
      {restaurants.map((restaurant: RestaurantEntity) => {
        return <Restaurant key={restaurant.id} restaurant={restaurant} />;
      })}
    </section>
  );
};
