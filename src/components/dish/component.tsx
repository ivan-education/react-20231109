import { DishEntity } from "src/types";
import { Counter } from "../counter/component";

interface Props {
  dish: DishEntity;
}
export const Dish: React.FC<Props> = ({ dish }) => {
  return (
    <div>
      Dish: {dish.name}, Price: {dish.price}
      &nbsp;
      <Counter />
    </div>
  );
};
