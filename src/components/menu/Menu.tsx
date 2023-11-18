import MenuItem from "../menu-item/MenuItem";

const Menu: React.FC<{ items: MenuItem[] }> = ({ items }) => {
  return (
    <>
      <h3>Menu:</h3>
      <div>
        {items.map((item: MenuItem) => {
          return <MenuItem key={item.id} item={item} />;
        })}
      </div>
    </>
  );
};

export default Menu;
