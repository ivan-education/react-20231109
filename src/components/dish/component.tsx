import { DishEntity } from "src/types";
import { Counter } from "../counter/component";
import { useState } from "react";

interface Props {
  dish: DishEntity;
}
export const Dish: React.FC<Props> = ({ dish }) => {
  const [itemCount, setItemCount] = useState(0);
  const onUpdateCount = (n: number) => {
    setItemCount(n);
  };
  return (
    <div>
      Dish: {dish.name}, Price: {dish.price}
      &nbsp;
      <Counter onUpdateCount={onUpdateCount} />
      {itemCount > 0 && <span>&nbsp; Selected: {itemCount} dishes</span>}
    </div>
  );
};
