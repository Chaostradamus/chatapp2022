import React from "react";
import Add from "../img/addAvatar.png";

function Register() {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">B Chat</span>
        <span className="title">Register</span>
        <form action="">
          <input type="text" placeholder="display name" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <input type="file" id="file" />
          <label style={{ display: "hidden" }} htmlFor="">
            <img src={Add} alt="" />
            <span>Add an avatar</span>
          </label>
          <button>Sign Up</button>
        </form>
        <p>Have an account already? Login </p>
      </div>
    </div>
  );
}

export default Register;
