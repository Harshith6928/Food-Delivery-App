import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../css/restaurantMenu.css";
import { useCart } from "../context/CartContext";
import Navbar from "../components/Navbar";

const RestaurantsMenu = () => {
  let { id } = useParams();
  const {state, setState} = useCart();

  const [restaurant, setRestaurant] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   let selectedRestaurant = restaurants.find((res) => res.id === parseInt(id));
  //   setRestaurant(selectedRestaurant);
  // }, [id]);

  useEffect(() => {
    const fetchRestaurant = async () => {
      try {
        const response = await fetch(`http://localhost:5001/api/restaurants/${id}/menu`); 
        if (!response.ok) {
          throw new Error("Failed to fetch restaurant details");
        }
        const data = await response.json();
        setRestaurant(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRestaurant();
  }, [id]);

  const handleAddToCart = async (item) => {
    try {
      const response = await fetch("http://localhost:5001/api/cart/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          restaurant_id: id,
          item_id: item.id, // Include item ID
          item_name: item.name,
          price: item.price,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to add item to cart");
      }

      const data = await response.json();
      console.log("Item added to cart:", data);
      setState(state + 1); // Update cart state
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  const handleState = () => {
    setState(state + 1);
  }

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error : {error}</div>;
  }

  return (
    <>
      <Navbar></Navbar>
      <div className="restaurant_name_main">
        <div className="restaurant_name">
          <h1>
            Restaurant Name : <span>{restaurant.name}</span>
          </h1>
          <h3>Cuisine : {restaurant.cuisine}</h3>
          <h4>Menu</h4>
        </div>
      </div>

      <div className="restaurant_menu">
        <div className="restaurant_menu_sub">
          {restaurant.menu && restaurant.menu.length > 0 ? (
            restaurant.menu.map((item) => (
              <div className="restaurant_menu_card" key={item.id}>
                <div className="image"></div>
                <div className="item_name">
                  <h1>{item.name}</h1>
                </div>
                <p>Price : ₹{item.price}</p>
                <div className="restaurant_menu_card">
                  <button onClick={() => {
                    handleAddToCart(item);
                    handleState();
                  }}>Add</button>
                </div>
              </div>
            ))
          ) : (
            <div>No menu items available</div>
          )}
        </div>
      </div>
    </>
  );
};

export default RestaurantsMenu;
