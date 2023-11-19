import { Dish } from "src/types";
import { MenuItem } from "src/components/menu-item/component";

interface Props {
  dishes: Dish[];
}

export const Menu: React.FC<Props> = ({ dishes }) => {
  return (
    <>
      <h3>Menu:</h3>
      <div>
        {dishes.map((dish: Dish) => {
          return <MenuItem key={dish.id} dish={dish} />;
        })}
      </div>
    </>
  );
};
