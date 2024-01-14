import classes from "./styles.module.scss";
import { Rating } from "src/components/rating/component";
import { ReviewEntity, UserEntity } from "src/types";
import { Button } from "../button/component";
import { ReviewEdit } from "../review-edit/component";
import { ANONYMOUS_USER } from "src/constants/constants";

interface Props {
  review: ReviewEntity;
  user: UserEntity;
  isLoading: boolean;
  isEditMode: boolean;
  onChangeEditMode: (a: boolean) => void;
  onSave: (a: string, b: number) => void;
}
export const Review: React.FC<Props> = ({
  review,
  user,
  isLoading,
  isEditMode,
  onChangeEditMode,
  onSave,
}) => {
  if (!review) {
    return null;
  }

  return (
    <div className={classes.review}>
      <img src="/quote.svg" alt="" className={classes.review__icon} />
      <div>
        <div>
          {isLoading ? (
            <span>Loading username...</span>
          ) : (
            <b>{user ? user.name : ANONYMOUS_USER}</b>
          )}
        </div>
        <div>
          {isEditMode ? (
            <ReviewEdit
              text={review.text}
              rating={review.rating}
              onSave={onSave}
            />
          ) : (
            review.text
          )}
        </div>
      </div>
      <div>
        <Button
          className={classes.review__editBtn}
          onClick={() => {
            isEditMode ? onChangeEditMode(false) : onChangeEditMode(true);
          }}
        >
          {isEditMode ? "Cancel" : "Edit"}
        </Button>

        <Rating rating={review.rating} />
      </div>
    </div>
  );
};
