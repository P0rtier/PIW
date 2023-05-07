import React from "react";
import "./Navbar.css";
import logo from "../../assets/img/logo.svg";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="/">
        <img src={logo} alt="" />
      </a>
      <a className="button" href="/add-estate">
        <button className="btn btn-outline-dark">Add estate</button>
      </a>
    </nav>
  );
};

export default Navbar;
