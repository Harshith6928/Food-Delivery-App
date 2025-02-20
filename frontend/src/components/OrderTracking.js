import React, { useEffect, useState } from "react";
import '../css/ordertracking.css'
import { Link } from "react-router-dom";

const mockSocket = {
  events: {},
  on(event, callback) {
    this.events[event] = callback;
  },
  emit(event, data) {
    if (this.events[event]) {
      this.events[event](data);
    }
  },
  simulateOrderUpdates(orderId) {
    setTimeout(() => this.emit("orderStatus", { orderId, status: "Preparing" }), 5000);
    setTimeout(() => this.emit("orderStatus", { orderId, status: "Out for Delivery" }), 10000);
    setTimeout(() => this.emit("orderStatus", { orderId, status: "Delivered" }), 15000);
  }
};

const OrderTracking = ({ orderId }) => {
  const [status, setStatus] = useState("Pending");

  useEffect(() => {
    mockSocket.on("orderStatus", (data) => {
      if (data.orderId === orderId) {
        setStatus(data.status);
      }
    });

    mockSocket.simulateOrderUpdates(orderId);

    return () => {
      mockSocket.events = {};
    };
  }, [orderId]);

  return (
    <div className="order_tracking">
      <div className="order_tracking_details">
        <h2>Order Tracking</h2>
        <p>Order ID: #{Math.floor(Math.random() * 100000)}</p>
        <div>
            <span>
                <h3>Status :</h3>
            </span>
            <h3>{status}</h3>
        </div>
      </div>
      <Link to="/home" className="back_home_btn">Back to Home</Link>
    </div>
  );
};

export default OrderTracking;
