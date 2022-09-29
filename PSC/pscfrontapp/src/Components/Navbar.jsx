import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      style={{
        width: "80%",
        height: "50px",
        backgroundColor: "1px solid red",
        margin: "auto",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "80%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/notes">Notes</Link>
      </div>
    </div>
  );
};

export default Navbar;
