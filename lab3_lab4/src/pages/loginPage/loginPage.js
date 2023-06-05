import React, { useState } from "react";
import {
  loginInWithEmail,
  loginWithGithub,
  loginWithGoogle,
  useUser,
} from "../../Firebase/UserService";
import "./loginPage.css";
import { useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const LoginPage = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLoginWithGoogle = () => {
    loginWithGoogle().then((user) => {
      if (!user) return;
      localStorage.setItem("user", JSON.stringify(user));
      window.location.reload();
    });
  };

  const handleLoginWithGithub = () => {
    loginWithGithub().then((user) => {
      if (!user) return;
      localStorage.setItem("user", JSON.stringify(user));
      window.location.reload();
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await loginInWithEmail(username, password).then((user) => {
        if (!user) return;
        localStorage.setItem("user", JSON.stringify(user));
        window.location.reload();
      });
    } catch (err) {
      console.error({ err });
      setError("Invalid username or password!");
    }
  };

  const navigateToRegister = () => {
    navigate("/register");
  };

  return (
    <div className="login-form">
      <div className="container-form-content">
        <form className="container-form" onSubmit={handleLogin}>
          <h2>Evilla Estates</h2>
          <div className="form-element">
            <label htmlFor="username">Email</label>
            <input
              type="email"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-element">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <div className="login-error">{error}</div>}
          <div className="form-buttons">
            <button
              className="btn register-button"
              onClick={navigateToRegister}
            >
              Register
            </button>
            <button className="btn btn-success">Login</button>
          </div>
        </form>
        <div className="firebase-login">
          <button className="firebase-button" onClick={handleLoginWithGoogle}>
            <FaGoogle style={{ fontSize: "35px" }} />
          </button>
          <button className="firebase-button" onClick={handleLoginWithGithub}>
            <FaGithub style={{ fontSize: "35px" }} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
