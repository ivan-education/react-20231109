import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import { restaurants } from "src/constants/mock.ts";
import "./main.scss";

const root = ReactDOM.createRoot(document.getElementById("root") as Element);

root.render(<App restaurants={restaurants} />);

//<React.StrictMode>
//    <App />
//  </React.StrictMode>,
