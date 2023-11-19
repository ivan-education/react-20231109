import { ReviewEntity } from "src/types";

export const Reviews: React.FC<{ reviews: ReviewEntity[] }> = ({ reviews }) => {
  return (
    <>
      <h3>Reviews:</h3>
      <ul>
        {reviews.map((review: ReviewEntity) => {
          return (
            <li key={review.id}>
              User: {review.user}, Rating: {review.rating}, Text: {review.text}
            </li>
          );
        })}
      </ul>
    </>
  );
};
