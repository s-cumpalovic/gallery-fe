// React imports
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import DefaultLayout from "./layouts";

// Redux imports
import { Provider } from "react-redux";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <DefaultLayout>
      <App />
    </DefaultLayout>
  </Provider>
);
