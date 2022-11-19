import React from "react";
import Profile from "../images/profile.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">N Chat</span>
      <div className="user">
        <img src={Profile} alt="profile img" />
        <span>John</span>
        <button>logout</button>
      </div>
    </div>
  );
};

export default Navbar;
