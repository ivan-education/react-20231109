import { selectReviewById } from "src/redux/entities/review/selectors";
import { selectUserById } from "src/redux/entities/user/selectors";
import { useAppSelector } from "src/redux/hooks";
import classes from "./styles.module.scss";
import { Rating } from "src/components/rating/component";

interface Props {
  id: string;
}
export const Review: React.FC<Props> = ({ id }) => {
  const review = useAppSelector((state) => selectReviewById(state, id));
  const user = useAppSelector((state) => selectUserById(state, review.userId));

  if (!review) {
    return null;
  }

  return (
    <div className={classes.review}>
      <div>
        {user && <div className={classes.review__name}>{user.name}</div>}
        <div>{review.text}</div>
      </div>
      <div className={classes.review__rating}>
        <Rating rating={review.rating} />
      </div>
    </div>
  );
};
