import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import SingleGallery from "../pages/SingleGallery";

export default function Router() {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/galleries/:id">
        <SingleGallery />
      </Route>
    </Switch>
  );
}
