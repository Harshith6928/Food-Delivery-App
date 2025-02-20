import React from "react";
import { Link } from "react-router-dom";
import "../css/orderConfirmation.css";

const OrderConfirmation = () => {
  const id = Math.floor(Math.random() * 100000);

  return (
    <div className="confirmation_main">
      <h1>🎉 Order Confirmed! 🎉</h1>
      <p>Thank you for your order! Your delicious food is on the way. 🚀</p>

      <div className="order_details">
        <h2>Order Details</h2>
        <p><strong>Order Id:</strong> #{id}</p>
        <p><strong>Estimated Delivery:</strong> 30-40 mins</p>
        <p><strong>Payment Method:</strong> Cash on Delivery</p>
      </div>

      <div className="buttons">
        <Link to="/home" className="back-home-btn">Back to Home</Link>
        <Link to="/trackyourorder" className="track_your_order">Track Your Order</Link>
      </div>
    </div> 
  );
};

export default OrderConfirmation;


