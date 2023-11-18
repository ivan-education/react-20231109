import { ProductsPage } from "src/pages/product-page/component.tsx";
import { restaurants } from "src/constants/mock.ts";

export const App = () => {
  return <ProductsPage products={restaurants} />;
};
