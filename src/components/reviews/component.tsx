import { ReviewEntity } from "src/types";
import { Review } from "../review/component";

export const Reviews: React.FC<{ reviews: ReviewEntity[] }> = ({ reviews }) => {
  return (
    <>
      <h3>Reviews:</h3>
      <ul>
        {reviews.map((review: ReviewEntity) => {
          return (
            <li key={review.id}>
              <Review review={review} />
            </li>
          );
        })}
      </ul>
    </>
  );
};
