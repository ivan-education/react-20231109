import { Restaurant } from "src/components/restaurant/component";
import restaurantPageStyles from "src/pages/restaurants-page/styles.module.css";
import { RestaurantEntity } from "src/types";
import styles from "./styles.module.css";

interface Props {
  entities: RestaurantEntity[];
}

export const Restaurants: React.FC<Props> = ({ entities }) => {
  return (
    <section className={`${styles.restaurants} ${restaurantPageStyles.indent}`}>
      {entities.map((entity: RestaurantEntity) => {
        return <Restaurant key={entity.id} entity={entity} />;
      })}
    </section>
  );
};
