import { Categories } from "src/components/categories/component";
import classes from "./styles.module.scss";
import classNames from "classnames";
import { useGetRestaurantsQuery } from "src/redux/services/api";

export const RestaurantsPage: React.FC = () => {
  const { data: restaurants, isLoading } = useGetRestaurantsQuery(undefined);

  return (
    <div>
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
        {!isLoading && <Categories restaurants={restaurants} />}
      </div>
    </div>
  );
};
