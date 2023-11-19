import { Categories } from "src/components/categories/component";
import { Restaurants } from "src/components/restaurants/component";
import { CategoryEntity, RestaurantEntity } from "src/types";
import styles from "./styles.module.css";

interface Props {
  restaurants: RestaurantEntity[];
}

export const RestaurantsPage: React.FC<Props> = ({ restaurants }) => {
  const categories: CategoryEntity[] = restaurants.map(
    (restaurant: RestaurantEntity) => {
      return {
        id: restaurant.id,
        name: restaurant.name,
      };
    }
  );
  return (
    <section className={styles.indent}>
      <Categories categories={categories} />
      <Restaurants entities={restaurants} />
    </section>
  );
};
