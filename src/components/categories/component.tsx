import { Category } from "src/components/category/component";
import classes from "./styles.module.scss";
import classNames from "classnames";
import { RestaurantEntity } from "src/types";

interface Props {
  restaurants: RestaurantEntity[];
  className?: string;
}

export const Categories: React.FC<Props> = ({ restaurants, className }) => {
  return (
    <section className={classNames(classes.categories)}>
      <div className={classNames(classes.categories__inner, className)}>
        {restaurants.map((restaurant) => {
          return (
            <Category
              key={restaurant.id}
              restaurant={restaurant}
              className={classes.categories__item}
            />
          );
        })}
      </div>
    </section>
  );
};
