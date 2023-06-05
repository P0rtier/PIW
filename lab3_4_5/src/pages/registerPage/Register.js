import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerWithEmail, useUser } from "../../Firebase/UserService";
import "./Register.css";

export const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    if (!username) {
      setError("Provide username!");
      return;
    }

    try {
      await registerWithEmail(email, username, password).then(() => {
        alert("Registered succesfully, please Log In!");
        navigate("/login");
      });
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="login-form">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Evilla Estates</h2>
        <div className="register-form-element">
          <label htmlFor="username">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="register-form-element">
          <label htmlFor="username">Display Name</label>
          <input
            type="text"
            id="displayname"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="register-form-element">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="register-form-element">
          <label htmlFor="password">Confirm Password</label>
          <input
            type="password"
            id="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        {error && <div className="login-error">{error}</div>}
        <button className="btn btn-success">Register</button>
      </form>
    </div>
  );
};

export default Register;
