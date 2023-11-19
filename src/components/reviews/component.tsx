import { ReviewEntity } from "src/types";

export const Reviews: React.FC<{ reviews: ReviewEntity[] }> = ({ reviews }) => {
  return (
    <>
      <h3>Reviews:</h3>
      <div>
        {reviews.map((review: ReviewEntity) => {
          return (
            <div key={review.id}>
              User: {review.user}, Rating: {review.rating}, Text: {review.text}
            </div>
          );
        })}
      </div>
    </>
  );
};
