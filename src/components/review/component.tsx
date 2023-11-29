import { ReviewEntity } from "src/types";
import classes from "./styles.module.scss";

interface Props {
  review: ReviewEntity;
}
export const Review: React.FC<Props> = ({ review }) => {
  return (
    <div className={classes.review}>
      <div className={classes.review__name}>{review.user}</div>
      <div>{review.text}</div>
      <div>Rating: {review.rating}</div>
    </div>
  );
};
