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

## Steps to Initialize the Database
## Create the Database

- CREATE DATABASE food_delivery_db;

- Restaurants Table:

![image](https://github.com/user-attachments/assets/ad5f7924-4eff-4ef3-bc0f-1958f1178adf)

- Sample data to insert items into menu table

![image](https://github.com/user-attachments/assets/70ee3a76-7459-4205-8e8b-33ec7d4f9ff6)

- Menu Items Table:

![image](https://github.com/user-attachments/assets/c024a8bf-e943-4e53-940f-c42b08c9a1fc)

- Sample data to insert items into menu table

![image](https://github.com/user-attachments/assets/449e647a-39b1-4b1a-b1d0-036341771936)

- Cart Table:

![image](https://github.com/user-attachments/assets/542a4c1c-e202-4e91-b620-8544beea1a58)

- User Table:

![image](https://github.com/user-attachments/assets/0896e9f0-e14d-41e4-b34f-2abe474c0a8b)

- Restaurant Login:

![image](https://github.com/user-attachments/assets/208996da-370d-496b-b0d3-3389f2b79885)

## Conclusion
This Food Delivery App project successfully demonstrates a complete full-stack application built with React.js on the frontend, Node.js and Express.js on the backend, and PostgreSQL for persistent data storage. The project fulfills the core requirements by enabling users to browse restaurants, view detailed menus, manage their carts, and place orders. In addition, the admin panel allows restaurant owners to securely log in and manage their menu items.

Key achievements include:

*  The project shows effective communication between the frontend and backend through well-designed RESTful APIs.

*  PostgreSQL has been used to manage restaurants, menu items, admin users, carts, and orders, with clear relationships and    constraints.

*  The React-based UI is responsive and provides a smooth experience for users and admins alike.
