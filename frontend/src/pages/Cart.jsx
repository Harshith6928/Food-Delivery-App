import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import Navbar from "../components/Navbar";
import '../css/cart.css'
import { useCart } from "../context/CartContext";

const Cart = () => {
  const {state, setState} = useCart();

  const [cart, setCart] = useState([]);

  // Fetch cart items from backend
  useEffect(() => {
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    try {
      const response = await fetch(`http://localhost:5001/api/cart/items`);
      if (!response.ok) {
        throw new Error("Failed to fetch cart items");
      }
      const data = await response.json();
      setCart(data);
    } catch (error) {
      console.error("Error fetching cart items:", error);
    }
  };
  console.log(cart);

  const updateQuantity = async (item_id, change) => {
    const item = cart.find((item) => item.item_id === item_id);

    if(item.quantity === 1 && change === -1) {
      return;
    }

    try {
      const response = await fetch(`http://localhost:5001/api/cart/updateQuantity`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ item_id, change }),
      });

      if (!response.ok) throw new Error("Failed to update quantity");

      // Update frontend state
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.item_id === item_id ? { ...item, quantity: item.quantity + change } : item
        ).filter((item) => item.quantity > 0) // Remove if quantity is 0
      );
      setState(state + change);
    } catch (error) {
      console.error("Error updating quantity:", error);
    }
  };

  const removeFromCart = async (item_id) => {
    const item = cart.find((item) => item.item_id === item_id);

    try {
      const response = await fetch(`http://localhost:5001/api/cart/removeItem`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ item_id }),
      });

      if (!response.ok) throw new Error("Failed to remove item");

      // Remove item from frontend
      setCart((prevCart) => prevCart.filter((item) => item.item_id !== item_id));
      setState(state - item.quantity);
    } catch (error) {
      console.error("Error removing item:", error);
    }
  };

  const clearCart = async () => {
    try {
      const response = await fetch(`http://localhost:5001/api/cart/clear`, {
        method: "DELETE",
      });
  
      if (!response.ok) throw new Error("Failed to clear cart");
  
      // Clear frontend state
      setCart([]);
      setState(0);
    } catch (error) {
      console.error("Error clearing cart:", error);
    }
  };  

  const getGrandTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <>
      <Navbar />
      <div className="cart_main">
        {cart.length > 0 ? (
          <>
            <h1>Your Cart</h1>
            <div className="cart">
              {cart.map((item) => (
                <div className="cart_item" key={item.item_id}>
                  <div className="cart_item_name">
                    <div className="cart_item_image"></div>
                    <p>{item.item_name}</p>
                  </div>
                  <div className="cart_quantity_controls">
                    <RemoveIcon className="calculation" onClick={() => updateQuantity(item.item_id, -1)} />
                    <span>{item.quantity}</span>
                    <AddIcon className="calculation" onClick={() => updateQuantity(item.item_id, 1)} />
                  </div>
                  <div className="price">
                    <p>Price: ₹<span>{item.price}</span></p>
                    <p>Total: ₹<span>{item.price * item.quantity}</span></p>
                  </div>
                  <button className="remove_btn" onClick={() => removeFromCart(item.item_id)}>Remove</button>
                </div>
              ))}
            </div>
            <p>Grand Total: ₹<span>{getGrandTotal()}</span></p>
            <Link className="checkout" to="/orderConfirmation">
              <button className="checkout_btn" onClick={clearCart}>Proceed to Checkout</button>
            </Link>
          </>
        ) : (
          <div className="empty">
            <h1>Your cart is empty.</h1>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
