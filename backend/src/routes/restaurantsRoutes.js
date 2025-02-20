const express = require('express');
const router = express.Router();
const { login, register, loginAdmin, getRestaurant, adminMenu , getAllRestaurants, getRestaurantMenu, addToCart, getCartItems, updateQuantity, removeFromCart, clearCart, addItem } = require('../controllers/restaurantController');

router.post('/auth/login', login);
router.post("/restaurant/login", loginAdmin);
router.get("/menu/:id", adminMenu)
router.use("/auth/register", register);
router.get('/restaurants', getAllRestaurants);
router.get('/restaurants/:id/menu', getRestaurantMenu);
router.post("/cart/add", addToCart);
router.get("/cart/items", getCartItems);
router.put("/cart/updateQuantity", updateQuantity);
router.delete("/cart/removeItem", removeFromCart);
router.delete("/cart/clear", clearCart);
router.get('/restaurant/:id', getRestaurant);
router.post('/menu/:restaurant_id/add', addItem);

module.exports = router;
