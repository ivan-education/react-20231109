import classes from "./styles.module.scss";
import classNames from "classnames";
import { Button } from "../button/component";
import { RestaurantEntity } from "src/types";
import { NavLink } from "react-router-dom";

interface Props {
  restaurant: RestaurantEntity;
  className?: string;
}

export const Category: React.FC<Props> = ({ restaurant, className }) => {
  if (!restaurant) {
    return null;
  }

  return (
    <NavLink to={`${restaurant.id}`}>
      <Button className={classNames(classes.category, className)}>
        {restaurant.name}
      </Button>
    </NavLink>
  );
};
