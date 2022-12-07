import React from "react";
import Router from "../router/Router";
import Navbar from "./Navbar";

export default function index({ children }) {
  return (
    <div>
      <Navbar />
      {children}
      <Router />
    </div>
  );
}
