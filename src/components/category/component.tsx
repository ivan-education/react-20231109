import { CategoryEntity } from "src/types";
import classes from "./styles.module.scss";
import classNames from "classnames";

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
    <button
      className={classNames(
        classes.category,
        activeCategoryClassName,
        className
      )}
      onClick={onClick}
    >
      {category.name}
    </button>
  );
};
