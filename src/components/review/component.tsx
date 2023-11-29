import { ReviewEntity } from "src/types";
import classes from "./styles.module.scss";
import { Rating } from "src/components/rating/component";

interface Props {
  review: ReviewEntity;
}
export const Review: React.FC<Props> = ({ review }) => {
  return (
    <div className={classes.review}>
      <div>
        <div className={classes.review__name}>{review.user}</div>
        <div>{review.text}</div>
      </div>
      <div className={classes.review__rating}>
        <Rating rating={review.rating} />
      </div>
    </div>
  );
};
