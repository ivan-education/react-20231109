import { Category } from "src/components/category/component";
import classes from "./styles.module.scss";
import { useEffect, useState } from "react";
import classNames from "classnames";
import { useAppDispatch, useAppSelector } from "src/redux/hooks";
import { selectRestaurantIds } from "src/redux/entities/restaurant/selectors";
import { getRestaurants } from "src/redux/entities/restaurant/thunks/get-restaurants";

interface Props {
  onCategorySelect: (id: string) => void;
  className?: string;
}

export const Categories: React.FC<Props> = ({
  onCategorySelect,
  className,
}) => {
  const [activeCategoryId, setActiveCategoryId] = useState<string>("");

  // not necessary to get values from props, now we get them from Redux
  const categoryIds = useAppSelector(selectRestaurantIds);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getRestaurants());
  }, []);

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
