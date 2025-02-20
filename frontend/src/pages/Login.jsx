import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Both fields are required");
      return;
    }
    // const user = users.find(user => user.email === email && user.password === password);
    // if (!user) {
    //   setError("Invalid email or password");
    //   return;
    // }
    // setError("");
    // console.log("Login successful", { email, password });
    // navigate("/home");

    try {
      const response = await fetch("http://localhost:5001/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message);

      console.log("Login successful", data);
      setError("");
      navigate("/home");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleRegister = () => {
    navigate("/register");
  };

  return (
    <div className="login"> 
    <Link to='adminlogin' className="adminlogin">
      <span>
        Admin Login
      </span>
    </Link>
    <div className="login-container">
      <h2>FOODIES - Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="input-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit" className="login-button">Login</button>
      </form>
      <p>Don't have an account?</p>
      <button className="register-button" onClick={handleRegister}>Register</button>
    </div>
    </div>
  );
};

export default Login;
