const MenuItem: React.FC<{ item: MenuItem }> = ({ item }) => {
  return (
    <div>
      Dish: {item.name}, Price: {item.price}
    </div>
  );
};

export default MenuItem;
