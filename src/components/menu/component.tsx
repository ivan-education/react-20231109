import { Dish } from "../dish/component";
import classes from "./styles.module.scss";

interface Props {
  dishIds: string[];
}

export const Menu: React.FC<Props> = ({ dishIds }) => {
  return (
    <>
      <h3>Menu:</h3>
      <ul className={classes.dishes}>
        {dishIds.map((dishId) => {
          return (
            <li key={dishId} className={classes.dishes__container}>
              <Dish id={dishId} />
            </li>
          );
        })}
      </ul>
    </>
  );
};
