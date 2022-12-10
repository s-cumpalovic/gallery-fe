import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectIsAuth } from "../store/user/selectors";
export default function Navbar() {
  const isAuth = useSelector(selectIsAuth);

  return (
    <div>
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/">All galleries</Link>
        </li>
        {!isAuth ? (
          <>
            <li className="nav-item">
              <Link to="/login">Login</Link>
            </li>
            <li className="nav-item">
              <Link to="/register">Register</Link>
            </li>
          </>
        ) : (
          <>
            <li className="nav-item">
              <Link to="/my-galleries">My galleries</Link>
            </li>
            <li className="nav-item">
              <Link to="/create">Create new gallery</Link>
            </li>
            <li className="nav-item">
              <Link to="/logout">Logout</Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
}
