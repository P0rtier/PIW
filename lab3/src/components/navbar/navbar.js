import React, { useContext } from "react";
import "./Navbar.css";
import logo from "../../assets/img/logo.svg";
import { InputGroup } from "react-bootstrap";
import { ThemeContext, themes } from "../dark-mode/themeContext";
import { FaMedapps } from "react-icons/fa";
import { UserContext } from "../../pages/loginPage/UserContext";

const Navbar = () => {
  const [darkMode, setDarkMode] = React.useState(true);

  const logoutUser = () => {
    localStorage.removeItem("evilla-user");
  };

  const userContext = useContext(UserContext);
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="navbar-content">
        <a className="logo navbar-brand" href="/">
          <img src={logo} alt="" />
        </a>
        {userContext.user ? (
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
        {userContext.user ? (
          <div className="user-dialog">
            <p>
              Hello, {userContext.user.name} {userContext.user.surname}
            </p>
          </div>
        ) : null}
        {userContext.user ? (
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
