import React from "react";
import "./Navbar.css";
import logo from "../../assets/img/logo.svg";
import { Button, InputGroup } from "react-bootstrap";
import { ThemeContext, themes } from "../dark-mode/themeContext";
import { FaMedapps } from "react-icons/fa";

const Navbar = () => {
  const [darkMode, setDarkMode] = React.useState(true);
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="navbar-content">
        <a class="logo navbar-brand" href="/">
          <img src={logo} alt="" />
        </a>
        <InputGroup>
          <a className="button" href="/add-estate">
            <button className="btn btn-outline-light">Add estate</button>
          </a>
          <ThemeContext.Consumer>
            {({ changeTheme }) => (
              <button
                className="icon-button"
                onClick={() => {
                  setDarkMode(!darkMode);
                  changeTheme(darkMode ? themes.light : themes.dark);
                }}
              >
                <FaMedapps style={{ fontSize: "35px" }} />
              </button>
            )}
          </ThemeContext.Consumer>
        </InputGroup>
      </div>
    </nav>
  );
};

export default Navbar;
