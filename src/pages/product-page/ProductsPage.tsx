import { Categories } from "../../components/categories/Categories";
import { Products } from "../../components/products/Products";
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
