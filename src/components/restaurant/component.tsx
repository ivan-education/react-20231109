import { Menu } from "src/components/menu/component";
import { Reviews } from "src/components/reviews/component";
import styles from "./styles.module.css";
import { RestaurantEntity } from "src/types";

interface Props {
  entity: RestaurantEntity;
}

export const Restaurant: React.FC<Props> = ({ entity }) => {
  return (
    <div className={styles.restaurant}>
      <div>Restaurant Name: {entity.name}</div>
      <Menu dishes={entity.menu} />
      <Reviews items={entity.reviews} />
    </div>
  );
};
