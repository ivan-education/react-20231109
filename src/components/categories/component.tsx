import { Category } from "src/components/category/component";
import classes from "./styles.module.scss";
import { useState } from "react";
import classNames from "classnames";
import { RestaurantEntity } from "src/types";

interface Props {
  restaurants: RestaurantEntity[];
  onCategorySelect: (restaurant: RestaurantEntity) => void;
  className?: string;
}

export const Categories: React.FC<Props> = ({
  restaurants,
  onCategorySelect,
  className,
}) => {
  const [activeCategoryId, setActiveCategoryId] = useState<string>("");

  return (
    <section className={classNames(classes.categories)}>
      <div className={classNames(classes.categories__inner, className)}>
        {restaurants.map((restaurant) => {
          return (
            <Category
              key={restaurant.id}
              restaurant={restaurant}
              onClick={() => {
                onCategorySelect(restaurant);
                setActiveCategoryId(restaurant.id);
              }}
              isActive={restaurant.id === activeCategoryId}
              className={classes.categories__item}
            />
          );
        })}
      </div>
    </section>
  );
};
