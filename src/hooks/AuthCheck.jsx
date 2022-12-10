import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { initRefreshToken } from "../store/user/slice";

export default function useAuth() {
  useEffect(() => {
    handleGetToken();
  });

  const dispatch = useDispatch();

  const handleGetToken = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      await dispatch(initRefreshToken());
    }
  };
  return <div></div>;
}
