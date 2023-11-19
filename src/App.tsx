import { RestaurantsPage } from "src/pages/restaurants-page/component";
import { restaurants } from "src/constants/mock.ts";

export const App = () => {
  return <RestaurantsPage restaurants={restaurants} />;
};
