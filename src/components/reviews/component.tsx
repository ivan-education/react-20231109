import { useGetReviewsByRestaurantIdQuery } from "src/redux/services/api";
import { ReviewEntity } from "src/types";
import { ReviewContainer } from "../review/container";
import { useParams } from "react-router-dom";

export const Reviews: React.FC = () => {
  const { restaurantId } = useParams();

  const { data: reviews, isFetching } =
    useGetReviewsByRestaurantIdQuery(restaurantId);

  if (isFetching) {
    return <div>Loading reviews...</div>;
  }

  return (
    <>
      <h3>Reviews:</h3>
      <ul>
        {reviews.map((review: ReviewEntity) => {
          return (
            <li key={review.id}>
              <ReviewContainer review={review} />
            </li>
          );
        })}
      </ul>
    </>
  );
};
