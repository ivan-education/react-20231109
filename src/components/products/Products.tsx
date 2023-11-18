import Product from "../product/Product";
import classes from "./styles.module.css";

const Products: React.FC<{ products: Restaurant[] }> = ({ products }) => {
  return (
    <section className={`${classes.products} ${classes.indent}`}>
      {products.map((product: Restaurant) => {
        return <Product key={product.id} product={product} />;
      })}
    </section>
  );
};

export default Products;
