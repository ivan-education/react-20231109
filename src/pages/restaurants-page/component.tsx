import { Categories } from "src/components/categories/component";
import classes from "./styles.module.scss";
import { useState } from "react";
import { Restaurant } from "src/components/restaurant/component";
import { Layout } from "src/components/layout/component";
import classNames from "classnames";
import { useGetRestaurantsQuery } from "src/redux/services/api";
import { RestaurantEntity } from "src/types";

export const RestaurantsPage: React.FC = () => {
  const [selectedRestaurant, setSelectedRestaurant] =
    useState<RestaurantEntity>();

  const { data: restaurants, isLoading } = useGetRestaurantsQuery(undefined);

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
        {!isLoading && (
          <Categories
            restaurants={restaurants}
            onCategorySelect={setSelectedRestaurant}
            className={classes.restaurantPage__category}
          />
        )}
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
