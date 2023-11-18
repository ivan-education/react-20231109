import { Review } from "src/components/review/Review";

export const Reviews: React.FC<{ items: Review[] }> = ({ items }) => {
  return (
    <>
      <h3>Reviews:</h3>
      <div>
        {items.map((item: Review) => {
          return <Review key={item.id} item={item} />;
        })}
      </div>
    </>
  );
};
