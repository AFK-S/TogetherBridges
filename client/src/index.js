import StateProvider from "./context/StateContext";
import { CookiesProvider } from "react-cookie";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store/store";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <CookiesProvider>
      <StateProvider>
        <App />
      </StateProvider>
    </CookiesProvider>
  </Provider>
);
