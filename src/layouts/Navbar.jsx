import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div>
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/">All galleries</Link>
        </li>
        <li className="nav-item">
          <Link to="/login">Login</Link>
        </li>
        <li className="nav-item">
          <Link to="/register">Register</Link>
        </li>
      </ul>
    </div>
  );
}
