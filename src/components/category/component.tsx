import { CategoryEntity } from "src/types";
import classes from "./styles.module.css";

interface Props {
  category: CategoryEntity;
  isActive: boolean;
  onClick: () => void;
}

export const Category: React.FC<Props> = ({ category, isActive, onClick }) => {
  return (
    <button
      className={`${classes.category} ${
        isActive ? classes.category_active : ""
      }`}
      onClick={onClick}
    >
      {category.name}
    </button>
  );
};
