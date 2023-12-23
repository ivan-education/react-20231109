import { RestaurantEntity } from "src/types";
import classes from "./styles.module.scss";
import { NavLink } from "react-router-dom";

interface Props {
  restaurant: RestaurantEntity;
}
export const RestaurantCard: React.FC<Props> = ({ restaurant }) => {
  return (
    <NavLink to={`${restaurant.id}`} className={classes.card__wrapper}>
      <div className={classes.card}>
        <div>
          <img src={restaurant.img} alt="" className={classes.card__img} />
        </div>
        <div className={classes.card_right}>
          <h3>{restaurant.name}</h3>
          <p>{restaurant.description}</p>
        </div>
      </div>
    </NavLink>
  );
};
