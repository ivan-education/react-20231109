import { DishEntity } from "src/types";

interface Props {
  dishes: DishEntity[];
}

export const Menu: React.FC<Props> = ({ dishes }) => {
  return (
    <>
      <h3>Menu:</h3>
      <ul>
        {dishes.map((dish: DishEntity) => {
          return (
            <li key={dish.id}>
              Dish: {dish.name}, Price: {dish.price}
            </li>
          );
        })}
      </ul>
    </>
  );
};
