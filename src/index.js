// React imports
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import DefaultLayout from "./layouts";
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
// Redux imports
import { Provider } from "react-redux";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <DefaultLayout>
        <App />
      </DefaultLayout>
    </BrowserRouter>
  </Provider>
);
