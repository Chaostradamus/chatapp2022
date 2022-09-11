import React from "react";
import Add from "../img/addAvatar.png";

function Login() {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">B Chat</span>
        <span className="title">Register</span>
        <form action="">
          <input type="text" placeholder="display name" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />

          <button>Sign In</button>
        </form>
        <p>Have an account already? Register </p>
      </div>
    </div>
  );
}

export default Login;
