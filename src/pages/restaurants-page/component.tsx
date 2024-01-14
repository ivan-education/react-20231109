import classes from "./styles.module.scss";
import classNames from "classnames";
import { useGetRestaurantsQuery } from "src/redux/services/api";
import { RestaurantCards } from "src/components/restaurant-cards/component";

interface Props {
  className?: string;
}

export const RestaurantsPage: React.FC<Props> = ({ className }) => {
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
          className,
          isLoading ? "loading" : ""
        )}
      >
        {!isLoading && <RestaurantCards restaurants={restaurants} />}
      </div>
    </div>
  );
};
