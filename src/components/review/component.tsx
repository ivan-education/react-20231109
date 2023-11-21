import { ReviewEntity } from "src/types";

interface Props {
  review: ReviewEntity;
}
export const Review: React.FC<Props> = ({ review }) => {
  return (
    <div>
      User: {review.user}, Rating: {review.rating}, Text: {review.text}
    </div>
  );
};
