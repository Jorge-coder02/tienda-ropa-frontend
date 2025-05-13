import ReactDOM from "react-dom/client";
import "./index.css";

import App from "./App";

// Importar el Provider de react-redux y el store
import { Provider } from "react-redux";
import store from "./store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
