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
- Ensure you have [Node.js](https://nodejs.org/) installed (which includes npm).
- Verify the installations by running in your terminal:
  ```bash
  node -v
  npm -v

## Navigate to the food-delivery-app folder
- cd food-delivery-app
## Navigate to the backend folder and install dependencies using npm
- cd backend
- npm install
## Automatically restarts the server during development
- npm nodemon
## Automatically restarts your Node.js server when file changes are detected, which is useful during development.
- npm nodemon
## Web framework for Node.js, Middleware to enable CORS
- npm express
## PostgreSQL client for Node.js, A PostgreSQL client that lets your application communicate with the PostgreSQL database.
- npm pg
## Middleware to enable CORS, Allows cross-origin requests between your frontend and backend.
- npm cors
## Enables loading environment variables from a .env file (such as database credentials and port settings).
-npm dotenv

## Running the Project

### Backend
**Navigate to the Backend Folder:**

- cd backend

## Configuration structure of backend

![image](https://github.com/user-attachments/assets/b979fd69-ce7e-4aa1-be0f-c3ed7272dc7a)

### Configure Environment Variables
- DB_USER=your_db_username
- DB_PASSWORD=your_db_password
- DB_HOST=localhost
- DB_NAME=food_delivery_db
- DB_PORT=5432
- PORT=5001

## Configuration of db.js

![image](https://github.com/user-attachments/assets/2fd9a11a-97df-4eb9-ab7c-99e8f088cd4d)

## Start the Backend Server:

- node server or node server.js

## OR

## Start the Backend Server with nodemon 
-By configuring the package.json
![image](https://github.com/user-attachments/assets/d691012e-285d-42b6-bc2e-ad046bf5c4d9)

- After configuring this use
- npm run dev

### Frontend

## Navigate to the Frontend Folder:

- cd frontend

## Install Dependencies:

- npm install

## Start the Frontend Server:

- npm start

## Mock Database Setup (PostgreSQL)

This project uses a **real PostgreSQL database** to store all persistent data, including restaurants, menu items, admin credentials, cart, and orders. Below are the connection details and steps to initialize the database.

### Connection Details
The connection to PostgreSQL is configured via a `.env` file in the backend directory. Example variables include:

```env
DB_USER=your_username
DB_PASSWORD=your_password
DB_HOST=localhost
DB_NAME=food_delivery_db
DB_PORT=5432
PORT=5001





