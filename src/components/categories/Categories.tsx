import { Category } from "src/components/category/Category";
import classes from "./styles.module.css";
import productPageStyles from "src/pages/product-page/styles.module.css";

export const Categories: React.FC<{ categories: Category[] }> = ({
  categories,
}) => {
  return (
    <div className={`${classes.categories} ${productPageStyles.indent}`}>
      {categories.map((category) => {
        return <Category key={category.id} category={category} />;
      })}
    </div>
  );
};
