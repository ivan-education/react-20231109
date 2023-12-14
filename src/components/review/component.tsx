import classes from "./styles.module.scss";
import { Rating } from "src/components/rating/component";
import { ReviewEntity, UserEntity } from "src/types";
import { useGetUsersQuery } from "src/redux/services/api";
import { ANONYMOUS_USER } from "src/constants/constants";

interface Props {
  review: ReviewEntity;
}
export const Review: React.FC<Props> = ({ review }) => {
  const { user, isLoading } = useGetUsersQuery(undefined, {
    selectFromResult: ({ data: users, isLoading }) => ({
      user: users?.find((user: UserEntity) => user.id === review.userId),
      isLoading,
    }),
  });

  if (!review) {
    return null;
  }

  return (
    <div className={classes.review}>
      <div>
        {isLoading ? (
          <div>Loading username...</div>
        ) : (
          <div className={classes.review__name}>
            {user ? user.name : ANONYMOUS_USER}
          </div>
        )}
        <div>{review.text}</div>
      </div>
      <div className={classes.review__rating}>
        <Rating rating={review.rating} />
      </div>
    </div>
  );
};
