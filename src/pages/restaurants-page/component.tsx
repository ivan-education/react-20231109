import { Categories } from "src/components/categories/component";
import { CategoryEntity, RestaurantEntity } from "src/types";
import classes from "./styles.module.scss";
import { useState } from "react";
import { Restaurant } from "src/components/restaurant/component";
import { Layout } from "src/components/layout/component";

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
    <Layout>
      <div className="restaurantPage">
        <Categories
          categories={categories}
          onCategorySelect={setSelectedRestaurantIndex}
          className={classes.restaurantPage__category}
        />
        {selectedRestaurant && (
          <Restaurant
            restaurant={selectedRestaurant}
            className={classes.restaurantPage__restaurant}
          />
        )}
      </div>
    </Layout>
  );
};
