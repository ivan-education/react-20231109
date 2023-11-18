import Review from "../review/Review";

const Reviews: React.FC<{ items: Review[] }> = ({ items }) => {
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

export default Reviews;
