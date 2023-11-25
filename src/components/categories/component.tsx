import { Category } from "src/components/category/component";
import classes from "./styles.module.css";
import restaurantPageStyles from "src/pages/restaurants-page/styles.module.css";
import { CategoryEntity } from "src/types";

interface Props {
  categories: CategoryEntity[];
  onCategorySelect: (index: number) => void;
  activeCategoryId: string;
}

export const Categories: React.FC<Props> = ({
  categories,
  onCategorySelect,
  activeCategoryId,
}) => {
  return (
    <div className={`${classes.categories} ${restaurantPageStyles.indent}`}>
      {categories.map((category, index) => {
        return (
          <Category
            key={category.id}
            category={category}
            onClick={() => onCategorySelect(index)}
            isActive={category.id === activeCategoryId}
          />
        );
      })}
    </div>
  );
};
