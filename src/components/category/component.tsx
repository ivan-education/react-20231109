import classes from "./styles.module.scss";
import classNames from "classnames";
import { Button } from "../button/component";
import { RestaurantEntity } from "src/types";

interface Props {
  restaurant: RestaurantEntity;
  isActive: boolean;
  onClick: () => void;
  className?: string;
}

export const Category: React.FC<Props> = ({
  restaurant,
  isActive,
  onClick,
  className,
}) => {
  if (!restaurant) {
    return null;
  }

  const activeCategoryClassName = isActive ? classes.category_active : "";

  return (
    <Button
      className={classNames(
        classes.category,
        activeCategoryClassName,
        className
      )}
      onClick={onClick}
    >
      {restaurant.name}
    </Button>
  );
};
