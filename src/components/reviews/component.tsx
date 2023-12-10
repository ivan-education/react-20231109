import { useAppDispatch, useAppSelector } from "src/redux/hooks";
import { Review } from "../review/component";
import { selectReviewsIdsByRestaurantId } from "src/redux/entities/review/selectors";
import { useEffect } from "react";
import { getReviewsByRestaurantId } from "src/redux/entities/review/thunks/get-reviews-by-restaurant-id";

export const Reviews: React.FC<{ restaurantId: string }> = ({
  restaurantId,
}) => {
  const reviewIds = useAppSelector((state) =>
    selectReviewsIdsByRestaurantId(state, restaurantId)
  );

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getReviewsByRestaurantId(restaurantId));
  }, [restaurantId]);

  return (
    <>
      <h3>Reviews:</h3>
      <ul>
        {reviewIds.map((reviewId: string) => {
          return (
            <li key={reviewId}>
              <Review id={reviewId} />
            </li>
          );
        })}
      </ul>
    </>
  );
};
