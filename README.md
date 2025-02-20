# Food Delivery App

## Project Overview
Food Delivery App is a full-stack web application that allows users to:
- Browse a list of restaurants and filter them by cuisine.
- View the menu for a selected restaurant.
- Add dishes to a cart and modify the order before checkout.
- Place orders and receive an order confirmation.
- Restaurant owners (admins) can log in to manage their restaurant menus.

The project is built using **React.js** for the frontend, **Node.js** with **Express.js** for the backend, and **PostgreSQL** for data persistence.

## Features
- **Restaurant List Page:** Displays restaurants with filtering by cuisine.
- **Restaurant Menu Page:** Shows menu items for a selected restaurant and allows users to add items to the cart.
- **Cart Page:** Lets users review and modify their orders.
- **Order Confirmation Page:** Presents order details upon checkout.
- **Admin Dashboard:** Allows restaurant owners to log in and manage (view/add) their menu items.
- **RESTful APIs:** Handles CRUD operations for restaurants, menu items, orders, and cart management.
- **Database Integration:** Utilizes PostgreSQL for storing restaurant, menu, admin, cart, and order data.

## Installation Steps

### Prerequisites
- [Node.js](https://nodejs.org/) (v14+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [PostgreSQL](https://www.postgresql.org/) (ensure it is installed and running)

### Clone the Repository
```bash
git clone https://github.com/yourusername/food-delivery-app.git
cd food-delivery-app
