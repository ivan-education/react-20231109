import { RestaurantsPage } from "src/pages/restaurants-page/component";
import { RestaurantEntity } from "./types";

interface Props {
  restaurants: RestaurantEntity[];
}

export const App: React.FC<Props> = ({ restaurants }) => {
  return <RestaurantsPage restaurants={restaurants} />;
};
