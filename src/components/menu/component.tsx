import { DishEntity } from "src/types";

interface Props {
  dishes: DishEntity[];
}

export const Menu: React.FC<Props> = ({ dishes }) => {
  return (
    <>
      <h3>Menu:</h3>
      <div>
        {dishes.map((dish: DishEntity) => {
          return (
            <div>
              Dish: {dish.name}, Price: {dish.price}
            </div>
          );
        })}
      </div>
    </>
  );
};
