import { Categories } from "src/components/categories/component";
import classes from "./styles.module.scss";
import { useState } from "react";
import { Restaurant } from "src/components/restaurant/component";
import { Layout } from "src/components/layout/component";

export const RestaurantsPage: React.FC = () => {
  const [selectedRestaurantId, setSelectedRestaurantId] = useState<string>("");

  return (
    <Layout>
      <div className="restaurantPage">
        <Categories
          onCategorySelect={setSelectedRestaurantId}
          className={classes.restaurantPage__category}
        />
        {selectedRestaurantId && (
          <Restaurant
            id={selectedRestaurantId}
            className={classes.restaurantPage__restaurant}
          />
        )}
      </div>
    </Layout>
  );
};
