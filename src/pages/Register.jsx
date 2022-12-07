// React imports
import React, { useState } from "react";
import RegisterForm from "../components/Auth/RegisterForm";

// Redux imports
import { useDispatch } from "react-redux";
import { initRegisterUser } from "../store/user/slice";
import { authService } from "../services/AuthService";
export default function Login() {
  const dispatch = useDispatch();

  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  });
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    await dispatch(initRegisterUser(newUser));
  };

  return (
    <div>
      <RegisterForm
        newUser={newUser}
        setNewUser={setNewUser}
        onSubmitUser={handleOnSubmit}
      />
    </div>
  );
}
