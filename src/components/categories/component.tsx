import { Category } from "src/components/category/component";
import classes from "./styles.module.scss";
import { CategoryEntity } from "src/types";
import { useState } from "react";
import classNames from "classnames";

interface Props {
  categories: CategoryEntity[];
  onCategorySelect: (index: number) => void;
  className?: string;
}

export const Categories: React.FC<Props> = ({
  categories,
  onCategorySelect,
  className,
}) => {
  const [activeCategoryId, setActiveCategoryId] = useState<string>("");
  return (
    <section className={classNames(classes.categories)}>
      <div className={classNames(classes.categories__inner, className)}>
        {categories.map((category, index) => {
          return (
            <Category
              key={category.id}
              category={category}
              onClick={() => {
                onCategorySelect(index);
                setActiveCategoryId(category.id);
              }}
              isActive={category.id === activeCategoryId}
              className={classes.categories__item}
            />
          );
        })}
      </div>
    </section>
  );
};
