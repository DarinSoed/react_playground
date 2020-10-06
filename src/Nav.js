import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

function Nav() {
  const navStyle = {
    color: "white",
  };
  return (
    <nav>
      <h3>Navigation</h3>
      <ul className="nav-links">
        <Link style={navStyle} to="/form">
          <li>Form</li>
        </Link>
        <Link style={navStyle} to="/increment">
          <li>Increment</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
