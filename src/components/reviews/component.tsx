import { Review } from "../review/component";

export const Reviews: React.FC<{ reviewIds: string[] }> = ({ reviewIds }) => {
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
