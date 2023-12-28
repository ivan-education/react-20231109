import { useParams } from "react-router-dom";
import { Dish } from "../dish/component";
import classes from "./styles.module.scss";
import { useGetDishesByRestaurantIdQuery } from "src/redux/services/api";
import { DishEntity } from "src/types";

export const Menu: React.FC = () => {
  const { restaurantId } = useParams();

  const { data: dishes, isFetching } =
    useGetDishesByRestaurantIdQuery(restaurantId);

  if (isFetching) {
    return <div>Loading menu...</div>;
  }

  return (
    <>
      <h3>Menu:</h3>
      <ul className={classes.dishes}>
        {dishes.map((dish: DishEntity) => {
          return (
            <li key={dish.id} className={classes.dishes__container}>
              <Dish dish={dish} />
            </li>
          );
        })}
      </ul>
    </>
  );
};
