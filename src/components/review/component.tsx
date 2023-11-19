import { ReviewEntity } from "src/types";

export const Review: React.FC<{ item: ReviewEntity }> = ({ item }) => {
  return (
    <div>
      User: {item.user}, Rating: {item.rating}, Text: {item.text}
    </div>
  );
};
