import Category from "../category/Category";
import classes from "./styles.module.css";

const Categories: React.FC<{ categories: Category[] }> = ({ categories }) => {
  return (
    <div className={`${classes.categories} ${classes.indent}`}>
      {categories.map((category) => {
        return <Category key={category.id} category={category} />;
      })}
    </div>
  );
};

export default Categories;
