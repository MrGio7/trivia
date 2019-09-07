import React from "react";

import "../Assets/SCSS/Register.scss";

const Register = () => {
  return (
    <div className="registerPage">
      <div>
        <h1>Sign Up</h1>
        <h2>It’s quick and easy.</h2>
      </div>

      <form>
        <input type="text" placeholder="UserName" />

        <input type="text" placeholder="User image address" />

        <input type="password" placeholder="Password" />

        <input type="password" placeholder="Repeat password" />

        <input type="submit" value="Sign Up" />
      </form>
    </div>
  );
};

export default Register;
