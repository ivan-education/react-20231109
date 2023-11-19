import { ReviewEntity } from "src/types";

export const Reviews: React.FC<{ reviews: ReviewEntity[] }> = ({ reviews }) => {
  return (
    <>
      <h3>Reviews:</h3>
      <div>
        {reviews.map((review: ReviewEntity) => {
          return (
            <div>
              User: {review.user}, Rating: {review.rating}, Text: {review.text}
            </div>
          );
        })}
      </div>
    </>
  );
};
