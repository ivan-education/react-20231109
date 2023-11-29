import { DishEntity } from "src/types";
import { Dish } from "../dish/component";
import classes from "./styles.module.scss";

interface Props {
  dishes: DishEntity[];
}

export const Menu: React.FC<Props> = ({ dishes }) => {
  return (
    <>
      <h3>Menu:</h3>
      <ul className={classes.dishes}>
        {dishes.map((dish: DishEntity) => {
          return (
            <li key={dish.id} className={classes.dishes__container}>
              <Dish dish={dish} />
            </li>
          );
        })}
      </ul>
    </>
  );
};
