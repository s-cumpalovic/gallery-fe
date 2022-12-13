import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Login from "../pages/Login";
import NewGallery from "../pages/NewGallery";
import Register from "../pages/Register";
import SingleGallery from "../pages/SingleGallery";
import { useSelector } from "react-redux";
import { selectIsAuth } from "../store/user/selectors";

export default function Router() {
  const isAuth = useSelector(selectIsAuth);

  const AuthRoute = ({ children, ...rest }) => {
    return (
      <Route {...rest}>{isAuth ? children : <Redirect to="/login" />}</Route>
    );
  };
  const GuestRoute = ({ children, ...rest }) => {
    return <Route {...rest}>{!isAuth ? children : <Redirect to="/" />}</Route>;
  };
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/authors/:id">
        <HomePage />
      </Route>
      <Route exact path="/galleries/:id">
        <SingleGallery />
      </Route>
      <GuestRoute path="/login" exact>
        <Login />
      </GuestRoute>
      <GuestRoute path="/register" exact>
        <Register />
      </GuestRoute>
      <AuthRoute path="/logout" exact>
        <Redirect to="/login" />
      </AuthRoute>
      <AuthRoute path="/create" exact>
        <NewGallery />
      </AuthRoute>
      <AuthRoute path="/my-galleries" exact>
        <HomePage />
      </AuthRoute>
      <AuthRoute path="/edit-gallery/:id" exact>
        <NewGallery />
      </AuthRoute>
    </Switch>
  );
}
