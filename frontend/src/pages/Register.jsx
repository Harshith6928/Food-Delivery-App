import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/register.css";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
    mobile: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5001/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (!response.ok) {
        setError(data.error || "Registration failed");
      } else {
        setError("");
        setTimeout(() => navigate("/"), 2000);
      }
    } catch (error) {
      setError("Something went wrong. Please try again.");
      console.error("Registration error:", error);
    }

    navigate("/");
  };

  return (
    <div className="register">
    <div className="register-container">
      <h2>FOODIES - Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="input-group">
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="input-group">
          <label>Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>
        <div className="input-group">
          <label>Address:</label>
          <input type="text" name="address" value={formData.address} onChange={handleChange} required />
        </div>
        <div className="input-group">
          <label>Mobile Number:</label>
          <input type="number" name="mobile" value={formData.mobile} onChange={handleChange} required />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit" className="register-button">Register</button>
      </form>
    </div>
  </div>
);
};

export default Register;
