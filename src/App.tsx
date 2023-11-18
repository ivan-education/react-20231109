import { ProductsPage } from "./pages/product-page/ProductsPage.tsx";
import { restaurants } from "./constants/mock.ts";

export const App = () => {
  return <ProductsPage products={restaurants} />;
};
