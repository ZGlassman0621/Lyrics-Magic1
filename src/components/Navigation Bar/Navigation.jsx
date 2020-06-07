import React, { Component } from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <Link to="/">
          <li className="navbar-home">Home</li>
        </Link>
        <Link to="./About">
          <li className="navbar-about">About</li>
        </Link>
      </ul>
    </nav>
  );
}

export default NavBar;
