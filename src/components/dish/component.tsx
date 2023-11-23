import { DishEntity } from "src/types";
import { Counter } from "../counter/component";
import { useState } from "react";

interface Props {
  dish: DishEntity;
}
export const Dish: React.FC<Props> = ({ dish }) => {
  const [count, setCount] = useState(0);

  return (
    <div>
      Dish: {dish.name}, Price: {dish.price}
      &nbsp;
      <Counter count={count} onUpdateCount={(n) => setCount(n)} />
      {count > 0 && <span>&nbsp; Selected: {count} dishes</span>}
    </div>
  );
};
