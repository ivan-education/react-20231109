import { Categories } from "src/components/categories/component";
import { CategoryEntity, RestaurantEntity } from "src/types";
import styles from "./styles.module.css";
import { useState } from "react";
import { Restaurant } from "src/components/restaurant/component";

interface Props {
  restaurants: RestaurantEntity[];
}

export const RestaurantsPage: React.FC<Props> = ({ restaurants }) => {
  const [selectedRestaurant, setSelectedRestaurant] = useState<
    RestaurantEntity | undefined
  >();

  const categories: CategoryEntity[] = restaurants.map(
    (restaurant: RestaurantEntity) => {
      return {
        id: restaurant.id,
        name: restaurant.name,
      };
    }
  );

  const onCategorySelect = (category: CategoryEntity) => {
    const selected = restaurants.find((item) => item.id === category.id);
    setSelectedRestaurant(selected);
  };

  return (
    <section className={styles.indent}>
      <Categories categories={categories} onCategorySelect={onCategorySelect} />
      <Restaurant restaurant={selectedRestaurant} />
    </section>
  );
};
