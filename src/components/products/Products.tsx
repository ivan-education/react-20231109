import { Product } from "src/components/product/Product";
import styles from "./styles.module.css";
import productPageStyles from "src/pages/product-page/styles.module.css";

export const Products: React.FC<{ products: Restaurant[] }> = ({
  products,
}) => {
  return (
    <section className={`${styles.products} ${productPageStyles.indent}`}>
      {products.map((product: Restaurant) => {
        return <Product key={product.id} product={product} />;
      })}
    </section>
  );
};
