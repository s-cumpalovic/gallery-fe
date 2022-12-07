import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Login from "../pages/Login";
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
      <Route path="/login">
        <Login />
      </Route>
    </Switch>
  );
}
