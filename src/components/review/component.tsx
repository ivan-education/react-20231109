import classes from "./styles.module.scss";
import { Rating } from "src/components/rating/component";
import { ReviewEntity, UserEntity } from "src/types";
import {
  useGetUsersQuery,
  useUpdateReviewMutation,
} from "src/redux/services/api";
import {
  ANONYMOUS_USER,
  RATING_MIN,
  RATING_STEP,
} from "src/constants/constants";
import { useEffect, useRef, useState } from "react";
import { Button } from "../button/component";
import { Counter } from "../counter/component";

interface Props {
  review: ReviewEntity;
}
export const Review: React.FC<Props> = ({ review }) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [text, setText] = useState(review.text);
  const [rating, setRating] = useState(review.rating);

  const { user, isLoading } = useGetUsersQuery(undefined, {
    selectFromResult: ({ data: users, isLoading }) => ({
      user: users?.find((user: UserEntity) => user.id === review.userId),
      isLoading,
    }),
  });

  const [updateReview] = useUpdateReviewMutation();

  const ref = useRef<HTMLInputElement>(null);

  const onSave = () => {
    updateReview({
      reviewId: review.id,
      userId: review.userId,
      text: text,
      rating: rating,
    });
    setIsEditMode(false);
  };

  const onEdit = () => {
    setIsEditMode(true);
  };

  const onCancelEdit = () => {
    setIsEditMode(false);
    setText(review.text);
    setRating(review.rating);
  };

  useEffect(() => {
    if (isEditMode) {
      if (ref.current != null) {
        ref.current.focus();
      }
    }
  }, [isEditMode]);

  if (!review) {
    return null;
  }

  return (
    <div className={classes.review}>
      <img src="/quote.svg" alt="" className={classes.review__icon} />
      <div>
        {isLoading ? (
          <div>Loading username...</div>
        ) : (
          <div className={classes.review__name}>
            {user ? user.name : ANONYMOUS_USER}
          </div>
        )}
        <div>
          {isEditMode ? (
            <input
              className={classes.review__input}
              ref={ref}
              type="text"
              value={text}
              onChange={(e) => {
                setText(e.target.value);
              }}
            />
          ) : (
            text
          )}
        </div>
        {isEditMode && (
          <div className={classes.review__btnContainer}>
            <div className={classes.review__editForm}>
              <label className={classes.review__ratingLabel}>Rating:</label>
              <Counter
                count={rating}
                onUpdateCount={(count) => setRating(count)}
                step={RATING_STEP}
                min={RATING_MIN}
              />
            </div>
            <Button className={classes.review__editBtn} onClick={onSave}>
              Save
            </Button>
          </div>
        )}
      </div>
      <div>
        {isEditMode ? (
          <Button className={classes.review__editBtn} onClick={onCancelEdit}>
            Cancel
          </Button>
        ) : (
          <Button className={classes.review__editBtn} onClick={onEdit}>
            Edit
          </Button>
        )}

        <Rating rating={rating} />
      </div>
    </div>
  );
};
