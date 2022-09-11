import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">B Chao</span>
      <div className="user">
        <img
          src="https://images.pexels.com/photos/11500401/pexels-photo-11500401.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
        />
        <span>Brandon</span>
        <button>logout</button>
      </div>
    </div>
  );
};

export default Navbar;
