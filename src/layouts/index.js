import React from "react";
import Router from "../router/Router";

export default function index({ children }) {
  return (
    <div>
      {children}
      <Router />
    </div>
  );
}
