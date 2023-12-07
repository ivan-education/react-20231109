import { Category } from "src/components/category/component";
import classes from "./styles.module.scss";
import { useState } from "react";
import classNames from "classnames";
import { useAppSelector } from "../redux/hooks";
import { selectRestaurantIds } from "../redux/features/restaurant/selectors";

interface Props {
  onCategorySelect: (id: string) => void;
  className?: string;
}

export const Categories: React.FC<Props> = ({
  onCategorySelect,
  className,
}) => {
  // not necessary to get values from props, now we get them from Redux
  const categoryIds = useAppSelector(selectRestaurantIds);

  const [activeCategoryId, setActiveCategoryId] = useState<string>("");

  return (
    <section className={classNames(classes.categories)}>
      <div className={classNames(classes.categories__inner, className)}>
        {categoryIds.map((id) => {
          return (
            <Category
              key={id}
              categoryId={id}
              onClick={() => {
                onCategorySelect(id);
                setActiveCategoryId(id);
              }}
              isActive={id === activeCategoryId}
              className={classes.categories__item}
            />
          );
        })}
      </div>
    </section>
  );
};
