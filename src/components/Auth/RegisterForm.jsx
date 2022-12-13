import React from "react";

export default function RegisterForm({
  newUser,
  setNewUser,
  onSubmitUser,
  acceptTerms,
  setAcceptTerms,
}) {
  return (
    <div>
      <form className="form-component" onSubmit={onSubmitUser}>
        <input
          placeholder="First Name.."
          type="text"
          value={newUser.firstName}
          onChange={({ target }) =>
            setNewUser({ ...newUser, firstName: target.value })
          }
        />
        <input
          placeholder="Last Name.."
          type="text"
          value={newUser.lastName}
          onChange={({ target }) =>
            setNewUser({ ...newUser, lastName: target.value })
          }
        />
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
        <input
          placeholder="Password confirmation.."
          type="password"
          value={newUser.passwordConfirmation}
          onChange={({ target }) =>
            setNewUser({
              ...newUser,
              passwordConfirmation: target.value,
            })
          }
        />
        <label>I agree to the terms and conditions</label>
        <input
          type="checkbox"
          onChange={(e) =>
            e.target.checked ? setAcceptTerms(true) : setAcceptTerms(false)
          }
        />
        <button disabled={!acceptTerms} className="btn btn-primary" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}
