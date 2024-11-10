import React from "react";
import "../Form/ModalForm.css";
const RegisterForm = () => {
  return (
    <form className="login-form" action="/submit-login" method="POST">
      <h2>Register</h2>
      <label>
        Username:
        <input type="text" name="username" required />
      </label>
      <label>
        Password:
        <input type="password" name="password" required />
      </label>
      <button className="formbtn" type="submit">
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
