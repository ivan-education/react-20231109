import { Menu } from "src/components/menu/component";
import { Reviews } from "src/components/reviews/component";
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
