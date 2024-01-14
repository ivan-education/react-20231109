import { ReviewEntity, UserEntity } from "src/types";
import { Review } from "./component";
import {
  useGetUsersQuery,
  useUpdateReviewMutation,
} from "src/redux/services/api";
import { useState } from "react";

interface Props {
  review: ReviewEntity;
}
export const ReviewContainer: React.FC<Props> = ({ review }) => {
  const [isEditMode, setIsEditMode] = useState(false);

  const [updateReview] = useUpdateReviewMutation();

  const onSave = (text: string, rating: number) => {
    updateReview({
      reviewId: review.id,
      userId: review.userId,
      text: text,
      rating: rating,
    });
    setIsEditMode(false);
  };

  const { user, isLoading }: { user: UserEntity; isLoading: boolean } =
    useGetUsersQuery(undefined, {
      selectFromResult: ({ data: users, isLoading }) => ({
        user: users?.find((user: UserEntity) => user.id === review.userId),
        isLoading,
      }),
    });

  return (
    <Review
      review={review}
      user={user}
      isLoading={isLoading}
      isEditMode={isEditMode}
      onChangeEditMode={setIsEditMode}
      onSave={onSave}
    />
  );
};
