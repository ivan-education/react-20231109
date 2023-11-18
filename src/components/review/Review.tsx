const Review: React.FC<{ item: Review }> = ({ item }) => {
  return (
    <div>
      User: {item.user}, Rating: {item.rating}, Text: {item.text}
    </div>
  );
};

export default Review;
