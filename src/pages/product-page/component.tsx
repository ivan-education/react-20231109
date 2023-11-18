import { Categories } from "src/components/categories/component";
import { Products } from "src/components/products/component";
import styles from "./styles.module.css";

export const ProductsPage: React.FC<{ products: Restaurant[] }> = ({
  products,
}) => {
  const categories: Category[] = products.map((product: Restaurant) => {
    return {
      id: product.id,
      name: product.name,
    };
  });
  return (
    <section className={styles.indent}>
      <Categories categories={categories} />
      <Products products={products} />
    </section>
  );
};
