import { ReviewEntity } from "src/types";
import { Review } from "../review/component";
import classes from "./styles.module.scss";

export const Reviews: React.FC<{ reviews: ReviewEntity[] }> = ({ reviews }) => {
  return (
    <>
      <h3>Reviews:</h3>
      <ul>
        {reviews.map((review: ReviewEntity) => {
          return (
            <li key={review.id} className={classes.review__container}>
              <Review review={review} />
            </li>
          );
        })}
      </ul>
    </>
  );
};
