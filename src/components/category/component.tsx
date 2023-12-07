import { CategoryEntity } from "src/types";
import classes from "./styles.module.scss";
import classNames from "classnames";
import { Button } from "../button/component";

interface Props {
  category: CategoryEntity;
  isActive: boolean;
  onClick: () => void;
  className?: string;
}

export const Category: React.FC<Props> = ({
  category,
  isActive,
  onClick,
  className,
}) => {
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
