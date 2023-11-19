import { ReviewEntity } from "src/types";
import { Review } from "src/components/review/component";

export const Reviews: React.FC<{ items: ReviewEntity[] }> = ({ items }) => {
  return (
    <>
      <h3>Reviews:</h3>
      <div>
        {items.map((item: ReviewEntity) => {
          return <Review key={item.id} item={item} />;
        })}
      </div>
    </>
  );
};
