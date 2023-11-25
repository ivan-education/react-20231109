import { Categories } from "src/components/categories/component";
import { CategoryEntity, RestaurantEntity } from "src/types";
import styles from "./styles.module.css";
import { useState } from "react";
import { Restaurant } from "src/components/restaurant/component";

interface Props {
  restaurants: RestaurantEntity[];
}

export const RestaurantsPage: React.FC<Props> = ({ restaurants }) => {
  const [selectedRestaurantIndex, setSelectedRestaurantIndex] =
    useState<number>(-1);

  const selectedRestaurant = restaurants[selectedRestaurantIndex];

  const categories: CategoryEntity[] = restaurants.map(
    (restaurant: RestaurantEntity) => {
      const { id, name } = restaurant;
      return { id, name };
    }
  );

  return (
    <section className={styles.indent}>
      <Categories
        categories={categories}
        onCategorySelect={setSelectedRestaurantIndex}
      />
      {selectedRestaurant && <Restaurant restaurant={selectedRestaurant} />}
    </section>
  );
};
