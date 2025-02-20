import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/adminlogin.css";

const AdminLogin = () => {
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

    try {
        const response = await fetch("http://localhost:5001/api/restaurant/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });
  
        const data = await response.json();
        console.log(data);
  
        if (!response.ok) {
            setError(data.message || "Invalid credentials. Please try again.");
            return;
          }
    
          console.log("Login successful");
          navigate(`/restaurant/${data.restaurantId}/menu`);
          
      } catch (error) {
        setError("Server error. Please try again later.");
      }
    
    setError("");
    console.log("Login successful", { email, password });
  };

  return (
    <div className="login">
    <div className="login-container">
      <h2>Restaurant - Login</h2>
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
    </div>
    </div>
  );
};

export default AdminLogin;
