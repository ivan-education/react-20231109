import { DishEntity } from "src/types";

interface Props {
  dish: DishEntity;
}
export const Dish: React.FC<Props> = ({ dish }) => {
  return (
    <div>
      Dish: {dish.name}, Price: {dish.price}
    </div>
  );
};
