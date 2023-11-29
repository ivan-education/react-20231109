import { DishEntity } from "src/types";
import { Counter } from "../counter/component";
import { useState } from "react";
import classes from "./styles.module.scss";

interface Props {
  dish: DishEntity;
}
export const Dish: React.FC<Props> = ({ dish }) => {
  const [count, setCount] = useState(0);

  return (
    <div className={classes.dish}>
      <div>
        <div className={classes.dish__name}>{dish.name}</div>
        <div>Price: {dish.price}</div>
      </div>
      <Counter count={count} onUpdateCount={(n) => setCount(n)} />
    </div>
  );
};
