import { Menu } from "src/components/menu/Menu";
import { Reviews } from "src/components/reviews/Reviews";
import styles from "./styles.module.css";

export const Product: React.FC<{ product: Restaurant }> = ({ product }) => {
  return (
    <div className={styles.product}>
      <div>Restaurant Name: {product.name}</div>
      <Menu items={product.menu} />
      <Reviews items={product.reviews} />
    </div>
  );
};
