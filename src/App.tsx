import { RestaurantsPage } from "src/pages/restaurants-page/component";
import { RestaurantEntity } from "./types";
import "./scss/styles.scss";

interface Props {
  restaurants: RestaurantEntity[];
}

export const App: React.FC<Props> = ({ restaurants }) => {
  return <RestaurantsPage restaurants={restaurants} />;
};
