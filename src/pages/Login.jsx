// React imports
import React, { useState } from "react";
import LoginForm from "../components/Auth/LoginForm";
import { useHistory } from "react-router-dom";

// Redux imports
import { useDispatch } from "react-redux";
import { initLoginUser } from "../store/user/slice";
export default function Login() {
  const dispatch = useDispatch();

  const history = useHistory();
  const [newUser, setNewUser] = useState({
    email: "",
    password: "",
  });
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    await dispatch(initLoginUser(newUser));
    history.push("/");
  };

  return (
    <div>
      <LoginForm
        newUser={newUser}
        setNewUser={setNewUser}
        onSubmitUser={handleOnSubmit}
      />
    </div>
  );
}
