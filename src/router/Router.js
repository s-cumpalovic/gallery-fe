import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";

export default function Router() {
  return (
    <Switch>
      <Route path="/">
        <HomePage />
      </Route>
    </Switch>
  );
}
