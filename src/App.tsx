import { RestaurantsPage } from "src/pages/restaurants-page/component";
import "./scss/styles.scss";
import { Provider } from "react-redux";
import store from "src/components/redux";

export const App: React.FC = () => {
  return (
    <Provider store={store}>
      <RestaurantsPage />
    </Provider>
  );
};
