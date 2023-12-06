import classes from "./styles.module.scss";
import classNames from "classnames";
import { Button } from "../button/component";
import { useAppSelector } from "../redux/hooks";
import { selectRestaurantById } from "../redux/features/restaurant/selectors";

interface Props {
  categoryId: string;
  isActive: boolean;
  onClick: () => void;
  className?: string;
}

export const Category: React.FC<Props> = ({
  categoryId,
  isActive,
  onClick,
  className,
}) => {
  const category = useAppSelector((state) =>
    selectRestaurantById(state, categoryId)
  );

  if (!category) {
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
      {category.name}
    </Button>
  );
};
