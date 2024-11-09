import React from "react";

const RegisterForm = () => {
  return (
    <form>
      <h2>Register</h2>
      <label>
        Username:
        <input type="text" name="username" required />
      </label>
      <label>
        Password:
        <input type="password" name="password" required />
      </label>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;
