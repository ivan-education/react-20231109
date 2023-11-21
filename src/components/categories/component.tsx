import { Category } from "src/components/category/component";
import classes from "./styles.module.css";
import restaurantPageStyles from "src/pages/restaurants-page/styles.module.css";
import { CategoryEntity } from "src/types";
import { useState } from "react";

interface Props {
  categories: CategoryEntity[];
  onCategorySelect: (category: CategoryEntity) => void;
}

export const Categories: React.FC<Props> = ({
  categories,
  onCategorySelect,
}) => {
  const [activeCategoryId, setActiveCategoryId] = useState("");
  return (
    <div className={`${classes.categories} ${restaurantPageStyles.indent}`}>
      {categories.map((category) => {
        return (
          <Category
            key={category.id}
            category={category}
            onClick={() => {
              onCategorySelect(category);
              setActiveCategoryId(category.id);
            }}
            isActive={category.id === activeCategoryId}
          />
        );
      })}
    </div>
  );
};
