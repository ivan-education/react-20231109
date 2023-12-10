import { Categories } from "src/components/categories/component";
import classes from "./styles.module.scss";
import { useEffect, useState } from "react";
import { Restaurant } from "src/components/restaurant/component";
import { Layout } from "src/components/layout/component";
import { useAppDispatch, useAppSelector } from "src/redux/hooks";
import { getRestaurants } from "src/redux/entities/restaurant/thunks/get-restaurants";
import { isDataLoading } from "src/redux/selectors";
import classNames from "classnames";

export const RestaurantsPage: React.FC = () => {
  const [selectedRestaurantId, setSelectedRestaurantId] = useState<string>("");

  const isLoading = useAppSelector((state) => isDataLoading(state));
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getRestaurants());
  }, []);

  return (
    <Layout>
      <div
        className={classNames(
          classes.spinnerWrapper,
          isLoading ? "loading" : ""
        )}
      >
        <img src="/spinner.gif" alt="Spinner" className={classes.spinner} />
      </div>
      <div
        className={classNames(
          classes.restaurantPage,
          isLoading ? "loading" : ""
        )}
      >
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
