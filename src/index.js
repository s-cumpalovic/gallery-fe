// React imports
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import DefaultLayout from "./layouts";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AuthCheck from "./hooks/AuthCheck";
import { AlertProvider } from "react-alert-with-buttons";
// Redux imports
import { Provider } from "react-redux";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <AlertProvider>
        <DefaultLayout>
          <AuthCheck>
            <App />
          </AuthCheck>
        </DefaultLayout>
      </AlertProvider>
    </BrowserRouter>
  </Provider>
);
