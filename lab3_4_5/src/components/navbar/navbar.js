import React from "react";
import "./Navbar.css";
import logo from "../../assets/img/logo.svg";
import { InputGroup } from "react-bootstrap";
import { ThemeContext, themes } from "../dark-mode/themeContext";
import { FaMedapps } from "react-icons/fa";
import { logoutAuth } from "../../Firebase/UserService";

const Navbar = () => {
  const [darkMode, setDarkMode] = React.useState(true);

  const logoutUser = () => {
    logoutAuth();
    localStorage.removeItem("user");
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="navbar-content">
        <a className="logo navbar-brand" href="/">
          <img src={logo} alt="" />
        </a>
        {localStorage.getItem("user") ? (
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
        ) : null}
        {localStorage.getItem("user") ? (
          <div className="user-dialog">
            <p>
              Hello,{" "}
              {JSON.parse(localStorage.getItem("user")).displayName ??
                JSON.parse(localStorage.getItem("user")).email}
            </p>
          </div>
        ) : null}
        {localStorage.getItem("user") ? (
          <a className="logout-btn-href" href="/login">
            <button
              className="btn btn-outline-light"
              onClick={() => logoutUser()}
            >
              LOGOUT
            </button>
          </a>
        ) : null}
      </div>
    </nav>
  );
};

export default Navbar;
