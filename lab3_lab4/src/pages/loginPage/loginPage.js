import React, { useContext, useState } from "react";
import { UserContext } from "./UserContext";
import "./loginPage.css";

const LoginPage = () => {
  const { setUser } = useContext(UserContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const users = [
      {
        username: "patryk@email.com",
        password: "niedozlamania",
        name: "Patryk",
        surname: "Uzarowski",
      },
      {
        username: "wojtek@onet.pl",
        password: "123",
        name: "Wojtek",
        surname: "Wojcich",
      },
      {
        username: "czarodziej@email.com",
        password: "hokuspokus",
        name: "Cezary",
        surname: "Pazura",
      },
    ];

    const user = users.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      localStorage.setItem("evilla-user", JSON.stringify(user));
      setUser(user);

      window.location.reload(false);
    } else {
      setError("Invalid username or password!");
    }
  };

  return (
    <div className="login-form">
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
        <button className="btn btn-success">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
