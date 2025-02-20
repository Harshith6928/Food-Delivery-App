const client = require('../config/db');

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const userQuery = "SELECT * FROM foodies_users WHERE email = $1 AND password = $2";
    const result = await client.query(userQuery, [email, password]);

    if (result.rows.length === 0) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const user = result.rows[0];

    res.status(200).json({ message: "Login successful", user });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const register = async (req, res) => {
  const { name, email, password, address, mobile } = req.body;

  try {
    // Check if email already exists
    const emailCheck = await client.query("SELECT * FROM foodies_users WHERE email = $1", [email]);
    if (emailCheck.rows.length > 0) {
      return res.status(400).json({ error: "Email already exists!" });
    }

    // Insert new user into the database
    const newUser = await client.query(
      "INSERT INTO foodies_users (username, email, password, address, mobile_number) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [name, email, password, address, mobile]
    );

    res.status(201).json({ message: "User registered successfully!", user: newUser.rows[0] });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ error: "Server error" });
  }
}

const loginAdmin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const result = await client.query(
      "SELECT * FROM admins_login WHERE email = $1 AND password = $2",
      [email, password]
    );

    // console.log(result);
    if (result.rows.length > 0) {
      res.json({ success: true, restaurantId: result.rows[0].restaurant_id });
    } else {
      res.status(401).json({ success: false, message: "Invalid email or password" });
    }
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

const adminMenu = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await client.query("SELECT * FROM menu WHERE restaurant_id = $1", [id]);
    res.json(result.rows);
  } catch (error) {
    console.error("Error fetching menu:", error);
    res.status(500).json({ message: "Server error" });
  }
};

const addItem = async (req, res) => {
  const { restaurant_id } = req.params;
  const { name, price, image } = req.body;

  if (!name || !price || !image) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const result = await client.query(
      "INSERT INTO menu (restaurant_id, name, price, image) VALUES ($1, $2, $3, $4) RETURNING *",
      [restaurant_id, name, price, image]
    );

    res.json(result.rows[0]); // Return the newly added item
  } catch (error) {
    console.error("Error adding menu item:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

const getAllRestaurants = async (req, res) => {
  try {
    const result = await client.query('SELECT * FROM restaurants');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getRestaurant = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await client.query("SELECT name FROM restaurants WHERE id = $1", [id]);
    if (result.rows.length === 0) return res.status(404).json({ message: "Restaurant not found" });
    res.json(result.rows[0]);
  } catch (error) {
    console.error("Error fetching restaurant:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

const getRestaurantMenu = async (req, res) => {
  try {
    const restaurantId = req.params.id;
    console.log(typeof restaurantId);

    // Fetch restaurant details
    console.log("Fetching restaurant...");
    const restaurantResult = await client.query("SELECT * FROM restaurants WHERE id = $1", [restaurantId]);

    if (restaurantResult.rows.length === 0) {
      console.log("No restaurant found");
      return res.status(404).json({ error: "Restaurant not found" });
    }

    // Fetch menu items for the restaurant
    console.log("Fetching restaurant menu...");
    const menuResult = await client.query("SELECT * FROM menu WHERE restaurant_id = $1", [restaurantId]);

    // Combine restaurant details with menu
    const restaurantData = { ...restaurantResult.rows[0], menu: menuResult.rows };

    res.json(restaurantData);
  } catch (error) {
    console.error("Database error:", error);
    res.status(500).json({ error: "Database error" });
  }
};

const addToCart = async (req, res) => {
  try {
    const { item_id, restaurant_id, item_name, price } = req.body;

    // Check if item already exists in the cart
    const checkItemQuery = `
      SELECT * FROM cart WHERE item_id = $1
    `;
    const { rows } = await client.query(checkItemQuery, [item_id]);

    if (rows.length > 0) {
      // If item exists, update quantity
      const updateQuery = `
        UPDATE cart 
        SET quantity = quantity + 1 
        WHERE item_id = $1 AND restaurant_id = $2
        RETURNING *;
      `;
      const updatedItem = await client.query(updateQuery, [item_id, restaurant_id]);
      res.json({ message: "Quantity updated", cart: updatedItem.rows[0] });
      console.log("data updated")
    } else {
      // If item does not exist, insert it with quantity = 1
      const insertQuery = `
        INSERT INTO cart (restaurant_id, item_id, item_name, price, quantity)
        VALUES ($1, $2, $3, $4, 1)
        RETURNING *;
      `;
      const newItem = await client.query(insertQuery, [restaurant_id, item_id, item_name, price]);
      res.json({ message: "Item added to cart", cart: newItem.rows[0] });
      console.log("data inserted")
    }
  } catch (error) {
    console.error("Error adding to cart:", error);
    res.status(500).json({ error: "Database error" });
  }
};

const getCartItems = async (req, res) => {
  try {
      const cartItems = await client.query(
          "SELECT * FROM cart"
      );
      res.json(cartItems.rows);
  } catch (error) {
      console.error("Error fetching cart items:", error);
      res.status(500).json({ error: "Database error" });
  }
};

// Update item quantity
const updateQuantity = async (req, res) => {
  try {
      const { item_id, change } = req.body;
      const updatedItem = await client.query(
          "UPDATE cart SET quantity = quantity + $1 WHERE item_id = $2 RETURNING quantity",
          [change, item_id]
      );

      if (updatedItem.rowCount === 0) return res.status(404).json({ error: "Item not found in cart" });

      // If quantity becomes zero, remove item
      if (updatedItem.rows[0].quantity <= 0) {
          await client.query("DELETE FROM cart WHERE item_id = $2", [item_id]);
      }

      res.json({ message: "Quantity updated successfully" });
  } catch (error) {
      console.error("Error updating quantity:", error);
      res.status(500).json({ error: "Database error" });
  }
};

// Remove item from cart
const removeFromCart = async (req, res) => {
  try {
      const { item_id } = req.body;
      await client.query("DELETE FROM cart WHERE item_id = $1", [item_id]);
      res.json({ message: "Item removed from cart" });
  } catch (error) {
      console.error("Error removing item:", error);
      res.status(500).json({ error: "Database error" });
  }
};

const clearCart = async (req, res) => {
  try {
    await client.query("DELETE FROM cart");
    res.status(200).json({ message: "Cart cleared successfully" });
  } catch (error) {
    console.error("Error clearing cart:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { register, login, addItem, getRestaurant, loginAdmin, adminMenu, getAllRestaurants, getRestaurantMenu, addToCart, getCartItems, updateQuantity, removeFromCart, clearCart };
