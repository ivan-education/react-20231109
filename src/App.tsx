import { RestaurantsPage } from "src/pages/restaurants-page/component";
import { BrowserRouter, Navigate } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import "./scss/styles.scss";
import { Provider } from "react-redux";
import store from "src/redux";
import { Layout } from "./components/layout/component";
import { NotFoundPage } from "./pages/not-found/component";
import { Restaurant } from "./components/restaurant/component";
import { Menu } from "./components/menu/component";
import { Reviews } from "./components/reviews/component";

export const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Navigate to="/restaurants" replace />} />
            <Route
              path="restaurants"
              element={<RestaurantsPage className="container" />}
            />
            <Route
              path="restaurants/:restaurantId"
              element={<Restaurant className="container" />}
            >
              {/* Not obvious: redirect to "menu" happens when user gets to "restaurants/:restaurantId"  */}
              <Route index element={<Navigate to="menu" replace />} />
              <Route path="menu" element={<Menu />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </Provider>
  );
};
