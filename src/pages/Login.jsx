import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Add from "../img/addAvatar.png";
import {  createUserWithEmailAndPassword } from "firebase/auth";

function Login() {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
     await createUserWithEmailAndPassword(auth, email, password);
     navigate('/')
    } catch (er) {
      setErr(true);
    }
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">B Chat</span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="display name" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />

          <button>Sign In</button>
          {err && <span>Something went wrong</span>}
        </form>
        <p>Have an account already? <Link to='/register'>Register</Link> </p>
      </div>
    </div>
  );
}

export default Login;
