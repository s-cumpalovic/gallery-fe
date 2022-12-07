// React imports
import React, { useState } from "react";
import LoginForm from "../components/Auth/LoginForm";

// Redux imports
import { useDispatch } from "react-redux";
import { initLoginUser } from "../store/user/slice";
export default function Login() {
  const dispatch = useDispatch();

  const [newUser, setNewUser] = useState({
    email: "",
    password: "",
  });
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    await dispatch(initLoginUser(newUser));
  };

  return (
    <div>
      <LoginForm newUser={newUser}  setNewUser={setNewUser} onSubmitUser={handleOnSubmit}/>
    </div>
  );
}
