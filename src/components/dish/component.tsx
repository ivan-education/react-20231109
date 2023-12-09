import { Counter } from "../counter/component";
import { useState } from "react";
import classes from "./styles.module.scss";
import { useAppSelector } from "../redux/hooks";
import { selectDishById } from "../redux/entities/dish/selectors";

interface Props {
  id: string;
}
export const Dish: React.FC<Props> = ({ id }) => {
  const [count, setCount] = useState(0);

  const dish = useAppSelector((state) => selectDishById(state, id));

  if (!dish) {
    return null;
  }

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
