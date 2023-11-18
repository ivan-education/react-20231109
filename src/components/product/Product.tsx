import Menu from "../menu/Menu";
import Reviews from "../reviews/Reviews";
import classes from "./styles.module.css";

const Product: React.FC<{ product: Restaurant }> = ({ product }) => {
  return (
    <div className={classes.product}>
      <div>Restaurant Name: {product.name}</div>
      <Menu items={product.menu} />
      <Reviews items={product.reviews} />
    </div>
  );
};

export default Product;
