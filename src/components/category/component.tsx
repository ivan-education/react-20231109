import { CategoryEntity } from "src/types";

interface Props {
  category: CategoryEntity;
}

export const Category: React.FC<Props> = ({ category }) => {
  return <div>{category.name}</div>;
};
