import { Categories } from "src/components/categories/component";
import classes from "./styles.module.scss";
import { useEffect, useState } from "react";
import { Restaurant } from "src/components/restaurant/component";
import { Layout } from "src/components/layout/component";
import { useAppDispatch } from "src/redux/hooks";
import { getRestaurants } from "src/redux/entities/restaurant/thunks/get-restaurants";

export const RestaurantsPage: React.FC = () => {
  const [selectedRestaurantId, setSelectedRestaurantId] = useState<string>("");

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getRestaurants());
  }, []);

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
