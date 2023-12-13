import classes from "./styles.module.scss";
import { Rating } from "src/components/rating/component";
import { ReviewEntity, UserEntity } from "src/types";
import { useGetUsersQuery } from "src/redux/services/api";

interface Props {
  review: ReviewEntity;
}
export const Review: React.FC<Props> = ({ review }) => {
  const { user } = useGetUsersQuery(undefined, {
    selectFromResult: ({ data: users }) => ({
      user: users?.find((user: UserEntity) => user.id === review.id),
    }),
  });

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
