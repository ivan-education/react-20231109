import { Dish } from "src/types";

interface Props {
  dish: Dish;
}

export const MenuItem: React.FC<Props> = ({ dish }) => {
  return (
    <div>
      Dish: {dish.name}, Price: {dish.price}
    </div>
  );
};
