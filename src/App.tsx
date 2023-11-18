import ProductsPage from "./pages/product-page/ProductsPage.tsx";
import { restaurants } from "./constants/mock.ts";

function App() {
  return <ProductsPage products={restaurants} />;
}

export default App;
