import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../css/adminmenu.css';

const AdminMenu = () => {
  const { id } = useParams(); // Get restaurant_id from URL
  const [menu, setMenu] = useState([]);
  const [restaurantName, setRestaurantName] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [newItem, setNewItem] = useState({ name: "", price: "", image: "" });

  useEffect(() => {
    // Fetch restaurant name
    fetch(`http://localhost:5001/api/restaurant/${id}`)
      .then((res) => res.json())
      .then((data) => setRestaurantName(data.name))
      .catch((err) => console.error("Error fetching restaurant:", err));

    // Fetch menu items
    fetch(`http://localhost:5001/api/menu/${id}`)
      .then((res) => res.json())
      .then((data) => setMenu(data))
      .catch((err) => console.error("Error fetching menu:", err));
  }, [id]);

  // Handle input changes in popup form
  const handleChange = (e) => {
    setNewItem({ ...newItem, [e.target.name]: e.target.value });
  };

  // Add new menu item
  const handleAddItem = async () => {
    if (!newItem.name || !newItem.price || !newItem.image) {
      alert("Please fill all fields");
      return;
    }

    try {
      const response = await fetch(`http://localhost:5001/api/menu/${id}/add`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          restaurant_id: id,
          name: newItem.name,
          price: newItem.price,
          image: newItem.image
        }),
      });

      if (!response.ok) throw new Error("Failed to add item");

      const addedItem = await response.json();
      setMenu([...menu, addedItem]); // Update UI with new item
      setShowPopup(false); // Close popup after adding item
      setNewItem({ name: "", price: "", image: "" }); // Clear input fields
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };

  return (
    <div className="menu-container">
      <h2 className="restaurant-name">{restaurantName} - Menu</h2>

      {/* Add Item Button */}
      <button className="open-popup-btn" onClick={() => setShowPopup(true)}>+ Add New Item</button>

      {/* Popup Modal */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h3>Add New Menu Item</h3>
            <input
              type="text"
              name="name"
              value={newItem.name}
              onChange={handleChange}
              placeholder="Enter item name"
              required
            />
            <input
              type="number"
              name="price"
              value={newItem.price}
              onChange={handleChange}
              placeholder="Enter price"
              required
            />
            <input
              type="text"
              name="image"
              value={newItem.image}
              onChange={handleChange}
              placeholder="Enter image URL"
              required
            />
            <div className="popup-buttons">
              <button className="add-item-btn" onClick={handleAddItem}>Add Item</button>
              <button className="cancel-btn" onClick={() => setShowPopup(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      {/* Menu List */}
      <ul className="menu-list">
        {menu.map((item) => (
          <li key={item.id} className="menu-item">
            <img src={item.image} alt={item.name} className="menu-image" />
            <div className="menu-details">
              <h3>{item.name}</h3>
              <p className="menu-price">₹{item.price}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminMenu;
