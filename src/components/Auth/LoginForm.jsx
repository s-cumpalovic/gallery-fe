import React from "react";

export default function LoginForm({ newUser, setNewUser, onSubmitUser }) {
  return (
    <div>
      <form className="form-component" onSubmit={onSubmitUser}>
        <input
          placeholder="Email.."
          type="email"
          value={newUser.email}
          onChange={({ target }) =>
            setNewUser({
              ...newUser,
              email: target.value,
            })
          }
        />
        <input
          placeholder="Password.."
          type="password"
          value={newUser.password}
          onChange={({ target }) =>
            setNewUser({
              ...newUser,
              password: target.value,
            })
          }
        />
        <button className="btn btn-primary"type="submit">Login</button>
      </form>
    </div>
  );
}
