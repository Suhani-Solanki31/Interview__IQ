import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./redux/store.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
     <BrowserRouter>              {/*//this code for routing */}
      <Provider store={store}>   {/*//this code for react-redux */}
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>,
);
