import { Restaurant } from "src/components/restaurant/component";
import classes from "./styles.module.scss";

interface Props {
  restaurantIds: string[];
}

export const Restaurants: React.FC<Props> = ({ restaurantIds }) => {
  return (
    <ul className={classes.restaurants}>
      {restaurantIds.map((restaurantId: string) => {
        return (
          <li key={restaurantId}>
            <Restaurant id={restaurantId} />
          </li>
        );
      })}
    </ul>
  );
};
