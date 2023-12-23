import classes from "./styles.module.scss";
import classNames from "classnames";
import { NavLink, Outlet, useNavigate, useParams } from "react-router-dom";
import { useGetRestaurantByIdQuery } from "src/redux/services/api";
import { Button } from "../button/component";

interface Props {
  className?: string;
}

export const Restaurant: React.FC<Props> = ({ className }) => {
  const { restaurantId } = useParams();
  const navigate = useNavigate();

  const { data: restaurant, isFetching } =
    useGetRestaurantByIdQuery(restaurantId);

  if (isFetching) {
    return <div>Loading restaurant...</div>;
  }

  if (!restaurant) {
    return null;
  }

  return (
    <section className={classNames(classes.restaurant, className)}>
      <div>
        <Button
          className={classes.restaurant__backBtn}
          onClick={() => navigate("/restaurants")}
        >
          Restaurants
        </Button>
        <h2 className={classes.restaurant__name}>{restaurant.name}</h2>
      </div>
      <div className={classes.restaurant__tab}>
        <NavLink
          to="menu"
          className={({ isActive }) =>
            isActive
              ? classNames(classes.restaurant__tabLink, "active")
              : classNames(classes.restaurant__tabLink)
          }
        >
          Menu
        </NavLink>
        <NavLink
          to="reviews"
          className={({ isActive }) =>
            isActive
              ? classNames(classes.restaurant__tabLink, "active")
              : classNames(classes.restaurant__tabLink)
          }
        >
          Reviews
        </NavLink>
      </div>

      <Outlet />
    </section>
  );
};
