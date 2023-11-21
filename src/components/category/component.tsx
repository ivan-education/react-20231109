import { CategoryEntity } from "src/types";

interface Props {
  category: CategoryEntity;
  onClick: () => void;
}

export const Category: React.FC<Props> = ({ category, onClick }) => {
  return <div onClick={onClick}>{category.name}</div>;
};
